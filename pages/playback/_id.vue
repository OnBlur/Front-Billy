<template>
  <b-row align-h="between">
    <!-- LEFT -->
    <b-col md="5">
      <nuxt-link tag="div" class="header" :to="{ path: '/project/' + videoInfo.project_id}">
        <div class="icon arrow-left">o</div>
        <div class="back-text">Terug</div>
      </nuxt-link>
      <div class="divider"></div>
      <div class="video-player">
        <video class="video" width="100%" ref="myVideo" controls>
          <source src="~/assets/bassie.mp4" type="video/mp4">
        </video>
        <div class="timeline">
          <!-- <div class="progress" :style="{ width: activeColor, fontSize: fontSize + 'px' }"></div> -->
          <div class="progress" ref="progressBar"></div>
          <TimelineItem
            v-for="item in allVideoNotes"
            :key="item.id"
            :noteProperty="item.type"
            :timestamp="item.timestamp"
            @click.native="selectNote(item)"
          />
        </div>
      </div>
      <div class="info">
        <div class="title">UMCG-44350 > Recording website 3 Roots ( Alex de Vries )</div>
        <div class="date">January 22, 2018</div>
      </div>
      <div class="tags-wrapper">
        <div class="tags">
          <Tag v-for="item in tags" :key="item.id" :title="item.title"/>
          <div class="custom">+ Add a tag here</div>
        </div>
      </div>
    </b-col>
    <!-- RIGHT -->
    <b-col md="4">
      <Collapsible
        :allVideoNotes="allVideoNotes"
        :getNotes="getNotes"
        :getFindings="getFindings"
        :getQuotes="getQuotes"
        @gotoTimestamp="goToTimestamp($event)"
        @editNote="editNote($event)"
        @deleteNote="deleteNote($event)"
      />
      <div class="text-input">
        <form v-on:submit.prevent="addNote">
          <input
            v-model="inputNote"
            v-on:keydown="pauseVideo"
            type="text"
            ref="note"
            placeholder="Write your note, findings or a quote here.."
          >
          <!-- <button type="submit">Submit</button> -->
        </form>
      </div>
      <div class="text-input-divider"></div>
      <div class="emojis">
        <div class="icon smile-o">p</div>
        <div class="icon meh-o">r</div>
        <div class="icon frown-o">q</div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import Tag from "@/components/Playback/Tag";
import Note from "@/components/Playback/Note";
import TimelineItem from "@/components/Playback/TimelineItem";
import Collapsible from "@/components/Playback/Collapsible";

export default {
  name: "Playback",
  // middleware: "versionCheck",
  layout: "playback",
  data() {
    return {
      id: this.$route.params.id,

      currentTimestamp: 0, // Timestamp of the video DOM
      progressBarTimestamp: 0, // The width of the progress bar under the video

      inputNote: "",

      tags: [{ id: 1, title: "MCL" }, { id: 2, title: "Revalidatie" }]
    };
  },
  mounted() {
    //Initialize timeline items on the timeline
    for (let i = 0; i < this.allVideoNotes.length; i++) {
      let itemPosition = this.allVideoNotes[i].timestamp * 7;
      // this.$refs.timelineItems[i].style.left = itemPosition + "%";
    }

    this.$refs.myVideo.ontimeupdate = event => {
      this.currentTimestamp = this.$refs.myVideo.currentTime;
    };
  },
  computed: {
    videoInfo() {
      return this.$store.getters["videos/getItem"](+this.id);
    },
    allVideoNotes() {
      return this.$store.getters["notes/getItemsByVideoId"](+this.id);
    },
    getNotes() {
      return this.$store.getters["notes/getItemsByVideoIdAndType"](+this.id, 0);
    },
    getFindings() {
      return this.$store.getters["notes/getItemsByVideoIdAndType"](+this.id, 1);
    },
    getQuotes() {
      return this.$store.getters["notes/getItemsByVideoIdAndType"](+this.id, 2);
    }
  },
  methods: {
    // Save timestamp and note onsubmit, clear the input field and resume the video
    addNote() {
      this.$store.dispatch("notes/addNote", {
        timestamp: this.$refs.myVideo.currentTime,
        note: this.inputNote
      });

      this.inputNote = "";
      this.playVideo();
    },
    editNote(item) {
      this.$store.dispatch("notes/editNote", item);
    },
    deleteNote(id) {
      this.$store.dispatch("notes/deleteNote", id);
    },
    // Retreive current time from video DOM element
    goToTimestamp(value) {
      this.$refs.myVideo.currentTime = value;
      this.pauseVideo();
    },
    playVideo() {
      this.$refs.myVideo.play();
    },
    selectNote(item) {
      this.activeNote = item.id;
      this.goToTimestamp(item.timestamp);
    },
    pauseVideo() {
      this.$refs.myVideo.pause();
    },
    changeActiveNoteHeader(id) {
      this.activeHeader = id;
    }
  },
  watch: {
    currentTimestamp() {
      let durationVideo = this.$refs.myVideo.duration;
      let increaseBarBy = 25 / +durationVideo;

      this.progressBarTimestamp = this.currentTimestamp * 10;
      // this.progressBarTimestamp = this.progressBarTimestamp + increaseBarBy;

      // Add bottom right border if the timeline is 100% width or above
      if (this.progressBarTimestamp >= 100) {
        this.$refs.progressBar.style.width = this.progressBarTimestamp + "%";
        this.$refs.progressBar.style.borderBottomRightRadius = "10px";
      } else {
        this.$refs.progressBar.style.width = this.progressBarTimestamp + "%";
        this.$refs.progressBar.style.borderBottomRightRadius = "0px";
      }
    }
  },
  components: {
    Tag,
    Note,
    TimelineItem,
    Collapsible
  }
};
</script>

<style lang="scss" scoped>
.header {
  cursor: pointer;
  display: flex;
  align-items: center;
  .icon {
    font-family: "icons";
    cursor: pointer;
    font-size: 20px;
  }
  .back-text {
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
    color: $dark-grey;
  }
}
.divider {
  height: 2px;
  background-color: $lightgrey;
  margin-top: 20px;
}
.video-player {
  margin-top: 30px;
  max-width: 826px;
  background-color: $white;
  background-color: transparent;
  box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.06);
  .video {
    outline: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .timeline {
    position: relative;
    margin-top: -5px;
    height: 50px;
    background-color: $dark-grey;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    display: flex;
    // justify-content: flex-end;
    // justify-content: center;
    align-items: center;
    .progress {
      height: 50px;
      background-color: $progress;
      // position: absolute;
      // left: 0;
      // width: 157px;
      // margin-left: 10px;
      border-radius: 0px;
      border-bottom-left-radius: 10px;
      // border-bottom-right-radius: 10px;
    }
    .timeline-item {
      position: absolute;
      cursor: pointer;
      width: 35px;
      height: 35px;
      background-color: $white;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        font-family: "icons";
      }
    }
  }
}
.info {
  margin-top: 45px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-size: 16px;
    font-weight: bold;
    color: $dark-grey;
  }
  .date {
    font-size: 16px;
    color: $dark-grey;
  }
}
.tags-wrapper {
  margin-top: 64px;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .tags {
    display: flex;
    .custom {
      cursor: pointer;
      background-color: $white;
      padding: 15px 25px 15px 25px;
      margin-right: 10px;
      border-radius: 10px;
      background-color: $dark-grey;
      color: $white;
    }
  }
}
.text-input {
  margin-top: 50px;
  display: flex;
  align-items: center;
  .icon {
    margin-right: 30px;
    font-family: "icons";
    font-size: 25px;
    cursor: pointer;
  }
  form {
    width: 100%;
    input {
      background-color: transparent;
      border-radius: 0;
      border: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      font-size: 1em;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
}
.text-input-divider {
  margin-top: 15px;
  height: 2px;
  background-color: $input-divider;
}
.emojis {
  font-family: "icons";
  font-size: 30px;
  display: flex;
  margin-top: 10px;
  .icon {
    margin-right: 10px;
    cursor: pointer;
    opacity: 0.4;
    &:hover {
      opacity: 1;
    }
  }
}
</style>