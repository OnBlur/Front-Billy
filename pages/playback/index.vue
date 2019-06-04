<template>
  <b-row :no-gutters="true">
    <!-- LEFT -->
    <b-col>
      <div class="header">
        <div class="icon-back">Arrow Left</div>
        <div
          class="beadcrumbs"
        >Company folders > 3 Roots > Projects > UMCG-44350 > Recording website 3 Roots</div>
      </div>
      <div class="divider"></div>
      <div class="info">
        <div class="title">UMCG-44350 > Recording website 3 Roots ( Alex de Vries )</div>
        <div class="date">January 22, 2018</div>
      </div>
      <div class="video-player">
        <video class="video" width="100%" ref="myVideo" controls>
          <source src="~/assets/bassie.mp4" type="video/mp4">
        </video>
        <div class="navigation">
          <div class="pause">PAUSE</div>
          <div class="video-timestamp">1:40 / 4:50</div>
        </div>
        <div class="timeline"></div>
      </div>
      <div class="tags-wrapper">
        <div class="tags-title">Tags:</div>
        <div class="tags">
          <div class="tag">#Amsterdam</div>
          <div class="tag">#16 to 20 years</div>
          <div class="tag custom">+ Add a tag here</div>
        </div>
      </div>
    </b-col>
    <!-- RIGHT -->
    <b-col>
      <div class="comments">
        <div class="notes-header">
          <div>Notes (30)</div>
          <div class="arrow-down-icon">^</div>
        </div>
        <div class="notes">
          <div class="note note-active">
            <div class="note-timestamp">1:40</div>
            <div class="note-divider note-divider-active"></div>
            <div class="note-text">De testpersoon komt gelukkig over.</div>
          </div>
          <div class="note" v-for="item in data" :key="item.id">
            <div class="note-timestamp">{{item.timestamp}}</div>
            <div class="note-divider"></div>
            <div class="note-text">{{item.note}}</div>
          </div>
        </div>
        <div class="findings-header">
          <div>Findings (13)</div>
          <div class="arrow-down-icon">^</div>
        </div>
        <div class="quotes-header">
          <div>Quotes (5)</div>
          <div class="arrow-down-icon">^</div>
        </div>
      </div>
      <div class="text-input">
        <div class="emoji">:)</div>
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
    </b-col>
  </b-row>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Playback",
  data() {
    return {
      inputNote: "",
      data: [
        { id: 1, timestamp: 1.4, note: "De testpersoon komt gelukkig over." },
        {
          id: 2,
          timestamp: 1.55,
          note: "Inschrijven vak weergeven in het midden van de website."
        },
        { id: 3, timestamp: 2.1, note: "De testpersoon komt gelukkig over." },
        {
          id: 4,
          timestamp: 2.3,
          note: "Inschrijven vak weergeven in het midden van de website."
        },
        { id: 5, timestamp: 3.1, note: "De testpersoon komt gelukkig over." },
        { id: 6, timestamp: 3.4, note: "De testpersoon komt gelukkig over." },
        { id: 7, timestamp: 4.4, note: "De testpersoon komt gelukkig over." }
      ]
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos.notes;
    },
    allVideos() {
      return this.$store.state.videos.data;
    },
    allNotes() {
      return this.$store.state.notes.data;
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
    deleteNote(position) {
      this.$store.commit("todos/deleteNote", position);
    },
    playVideo() {
      this.$refs.myVideo.play();
    },
    pauseVideo() {
      this.$refs.myVideo.pause();
    },
    addVideo() {
      this.$store.dispatch("videos/addVideo", this.newVideoData);
    },
    editVideo(item) {
      this.$store.dispatch("videos/editVideo", item);
    },
    deleteVideo(id) {
      this.$store.dispatch("videos/deleteVideo", id);
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  .icon-back {
  }
  .beadcrumbs {
  }
}
.divider {
  height: 2px;
  background-color: #e7e7e7;
  margin-top: 20px;
}
.info {
  margin-top: 30px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
  }
  .date {
  }
}
.video-player {
  margin-top: 30px;
  background-color: white;
  background-color: transparent;
  .video {
    // height: 400px;
    // width: 650px;
    // background-image: url("../img/website.png");
    // background-size: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .navigation {
    padding: 17px;
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;
    .pause {
    }
    .video-timestamp {
    }
  }
  .timeline {
    height: 50px;
    background-color: #424242;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
.tags-wrapper {
  margin-top: 30px;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .tags-title {
  }
  .tags {
    display: flex;
    .tag {
      background-color: white;
      padding: 12px;
      margin-right: 10px;
      border-radius: 10px;
    }
    .custom {
      background-color: #424242;
      color: white;
    }
  }
}

.comments {
  // width: 550px;
  background-color: #fbfbfb;
  border-radius: 10px;
  .notes-header {
    display: flex;
    justify-content: space-between;
    padding: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    .arrow-down-icon {
    }
  }
  .notes {
    margin-top: 5px;
    max-height: 470px;
    overflow-y: scroll;
    .note {
      padding: 25px;
      display: flex;
      align-items: center;
      .note-timestamp {
      }
      .note-divider {
        height: 40px;
        width: 2px;
        margin-left: 10px;
        margin-right: 10px;
        background-color: #f1f1f1;
      }
      .note-divider-active {
        background-color: #daedf5;
      }
      .note-text {
      }
    }
    .active {
      background-color: white;
      box-shadow: 0px 10px 9px #f7f7f7, 0px -10px 5px #f7f7f7;
    }
  }
  .findings-header {
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    .arrow-down-icon {
    }
  }
  .quotes-header {
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    .arrow-down-icon {
    }
  }
}
.text-input {
  margin-top: 50px;
  display: flex;
  .emoji {
    margin-right: 30px;
  }
  form {
    input {
      background-color: transparent;
      border-radius: 0;
      border: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      font-size: 1em;
      width: 100%;
    }
    button {
    }
  }
}
.text-input-divider {
  margin-top: 10px;
  height: 2px;
  background-color: #bfbfbf;
}
</style>