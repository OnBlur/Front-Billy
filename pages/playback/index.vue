<template>
  <b-row align-h="between">
    <!-- LEFT -->
    <b-col md="5">
      <div class="header">
        <div class="icon arrow-left">o</div>
        <div class="back-text">Terug</div>
      </div>
      <div class="divider"></div>
      <div class="video-player">
        <video class="video" width="100%" ref="myVideo" controls>
          <source src="~/assets/bassie.mp4" type="video/mp4">
        </video>
        <div class="timeline">
          <!-- <div class="progress" :style="{ width: activeColor, fontSize: fontSize + 'px' }"></div> -->
          <div class="progress" ref="progressBar"></div>
          <TimelineItem
            v-for="item in allNotes"
            :key="item.id"
            :noteProperty="item.property"
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
      <div class="comments">
        <button class="notes-header" @click="changeActiveNoteHeader(1)">
          Notes ({{notes.length}})
          <i
            class="icon chevron-left"
            :class="{ 'active': activeHeader === 1 }"
          >n</i>
        </button>
        <div class="notes" v-if="activeHeader === 1">
          <Note
            v-for="item in allNotes"
            :key="item.id"
            :active="item.id === activeNote"
            :timestamp="trimTimestamp(+item.timestamp)"
            :note="item.content"
            :noteProperty="item.property"
            @click.native="selectNote(item)"
            @editNote="editNote"
            @deleteNote="deleteNote(item.id)"
          />
        </div>
        <button class="findings-header" @click="changeActiveNoteHeader(2)">
          Findings ({{findings.length}})
          <i
            class="icon chevron-left"
            :class="{ 'active': activeHeader === 2 }"
          >n</i>
        </button>
        <div class="notes" v-if="activeHeader === 2">
          <Note
            v-for="item in findings"
            :key="item.id"
            :active="item.id === activeNote"
            :timestamp="trimTimestamp(+item.timestamp)"
            :note="item.note"
            :noteProperty="item.property"
            @click.native="selectNote(item)"
          />
        </div>
        <button class="quotes-header" @click="changeActiveNoteHeader(3)">
          Quotes ({{quotes.length}})
          <i
            class="icon chevron-left"
            :class="{ 'active': activeHeader === 3 }"
          >n</i>
        </button>
        <div class="notes" v-if="activeHeader === 3">
          <Note
            v-for="item in quotes"
            :key="item.id"
            :active="item.id === activeNote"
            :timestamp="item.timestamp"
            :note="item.note"
            :noteProperty="item.property"
            @click.native="selectNote(item)"
          />
        </div>
      </div>
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
import { mapMutations } from "vuex";
import Tag from "@/components/Playback/Tag";
import Note from "@/components/Playback/Note";
import TimelineItem from "@/components/Playback/TimelineItem";

export default {
  name: "Playback",
  layout: "playback",
  data() {
    return {
      currentTimestamp: 0, // Timestamp of the video DOM
      progressBarTimestamp: 0, // The width of the progress bar under the video

      inputNote: "",
      activeNote: 1,
      activeHeader: 1,

      tags: [{ id: 1, title: "MCL" }, { id: 2, title: "Revalidatie" }],
      notes: [
        {
          id: 1,
          iconClass: "quote-left",
          characterClass: "l",
          property: 1,
          timestamp: 1.4,
          content: "De testpersoon komt gelukkig over."
        },
        {
          id: 2,
          iconClass: "bulb",
          characterClass: "k",
          property: 1,
          timestamp: 1.5,
          content: "Inschrijven vak weergeven in het midden van de website."
        },
        {
          id: 3,
          iconClass: "quote-left",
          characterClass: "l",
          property: 1,
          timestamp: 2.1,
          content: "Inschrijven vak weergeven in het midden van de website."
        },
        {
          id: 4,
          iconClass: "quote-left",
          characterClass: "l",
          property: 1,
          timestamp: 2.3,
          content: "Inschrijven vak weergeven in het midden van de website."
        },
        {
          id: 5,
          iconClass: "bulb",
          characterClass: "k",
          property: 1,
          timestamp: 3.1,
          content: "Inschrijven vak weergeven in het midden van de website."
        }
      ],
      findings: [
        {
          id: 1,
          timestamp: 2.1,
          content: "De testpersoon komt gelukkig over."
        },
        { id: 2, timestamp: 1.4, content: "De testpersoon komt gelukkig over." }
      ],
      quotes: [
        {
          id: 1,
          timestamp: 1.4,
          content: "De testpersoon komt gelukkig over."
        },
        { id: 2, timestamp: 1.4, content: "De testpersoon komt gelukkig over." }
      ]
    };
  },
  mounted() {
    //Initialize timeline items on the timeline
    for (let i = 0; i < this.notes.length; i++) {
      let itemPosition = this.notes[i].timestamp * 7;
      // this.$refs.timelineItems[i].style.left = itemPosition + "%";
    }

    this.$refs.myVideo.ontimeupdate = event => {
      this.currentTimestamp = this.$refs.myVideo.currentTime;
    };
  },
  computed: {
    allNotes() {
      return this.$store.getters["notes/allData"];
    }
  },
  methods: {
    // Save timestamp and note onsubmit, clear the input field and resume the video
    addNote() {
      this.$store.commit("todos/addNote", {
        timestamp: this.$refs.myVideo.currentTime,
        note: this.inputNote
      });

      this.inputNote = "";
      this.playVideo();
    },
    // Retreive current time from video DOM element
    goToTimestamp(value) {
      this.$refs.myVideo.currentTime = value;
      this.pauseVideo();
    },
    playVideo() {
      this.$refs.myVideo.play();
    },
    pauseVideo() {
      this.$refs.myVideo.pause();
    },
    addNote() {
      this.$store.dispatch("notes/deleteNote", this.newVideoData);
    },
    editNote(item) {
      console.log(item);
      this.$store.dispatch("notes/deleteNote", item);
    },
    deleteNote(id) {
      this.$store.dispatch("notes/deleteNote", id);
    },
    selectNote(item) {
      this.activeNote = item.id;
      this.goToTimestamp(item.timestamp);
    },
    changeActiveNoteHeader(id) {
      this.activeHeader = id;
    },
    trimTimestamp(time) {
      return time.toFixed(2);
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
  components: { Tag, Note, TimelineItem }
};
</script>

<style lang="scss" scoped>
.header {
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
    color: #424242;
  }
}
.divider {
  height: 2px;
  background-color: #e7e7e7;
  margin-top: 20px;
}
.video-player {
  margin-top: 30px;
  max-width: 826px;
  background-color: white;
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
    background-color: #424242;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    display: flex;
    // justify-content: flex-end;
    // justify-content: center;
    align-items: center;
    .progress {
      height: 50px;
      background-color: #808080;
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
      background-color: #ffffff;
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
    color: #424242;
  }
  .date {
    font-size: 16px;
    color: #424242;
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
      background-color: white;
      padding: 15px 25px 15px 25px;
      margin-right: 10px;
      border-radius: 10px;
      background-color: #424242;
      color: white;
    }
  }
}
.comments {
  // width: 550px;
  max-width: 674px;
  background-color: #fbfbfb;
  border-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.06);
  .notes-header {
    background-color: white;
    color: #424242;
    padding: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    text-align: left;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-style: hidden;

    display: flex;
    justify-content: space-between;
    .icon {
      font-family: "icons";
      font-style: normal;
      transform: rotate(180deg);

      &.active {
        transform: rotate(270deg);
      }
    }
  }
  .notes {
    margin-top: 5px;
    max-height: 470px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: #424242;
      border-radius: 0px;
    }
    .active {
      background-color: white;
      box-shadow: 0px 10px 9px #f7f7f7, 0px -10px 5px #f7f7f7;
    }
  }
  .findings-header {
    background-color: white;
    color: #424242;
    padding: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.05);

    display: flex;
    justify-content: space-between;
    .icon {
      font-family: "icons";
      font-style: normal;
      transform: rotate(180deg);

      &.active {
        transform: rotate(270deg);
      }
    }
  }
  .quotes-header {
    background-color: white;
    color: #424242;
    padding: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    text-align: left;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-style: hidden;

    display: flex;
    justify-content: space-between;
    .icon {
      font-family: "icons";
      font-style: normal;
      transform: rotate(180deg);

      &.active {
        transform: rotate(270deg);
      }
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
  background-color: #bfbfbf;
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