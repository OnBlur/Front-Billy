<template>
  <b-row :no-gutters="true">
    <!-- LEFT -->
    <b-col>
      <div class="header">
        <img class="icon-back" src="~/static/icons/right-arrow.svg" alt="Back">
        <div class="back-text">Terug</div>
      </div>
      <div class="divider"></div>
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
      <div class="info">
        <div class="title">UMCG-44350 > Recording website 3 Roots ( Alex de Vries )</div>
        <div class="date">January 22, 2018</div>
      </div>
      <div class="tags-wrapper">
        <Tag :tags="tags"/>
      </div>
    </b-col>
    <b-col cols="1"></b-col>
    <!-- RIGHT -->
    <b-col>
      <div class="comments">
        <div class="notes-header">
          <div class="notes-header-text">Notes (30)</div>
          <img class="icon-down" src="~/static/icons/next.svg" alt="Close">
        </div>
        <div class="notes">
          <Note
            v-for="item in data"
            :key="item.id"
            :active="item.id === activeNote"
            :timestamp="item.timestamp"
            :note="item.note"
            @click.native="activeNote = item.id"
          />
          <!-- <div
            class="note"
            :class="{ 'active': item.id === activeNote }"
            v-for="item in data"
            :key="item.id"
            @click="activeNote = item.id"
          >
            <div class="note-timestamp">{{item.timestamp}}</div>
            <div class="note-divider" :class="{ 'active': item.id === activeNote }"></div>
            <div class="note-text">{{item.note}}</div>
          </div>-->
        </div>
        <div class="findings-header">
          <div class="findings-header-text">Findings (13)</div>
          <img class="icon-right" src="~/static/icons/next_2.svg" alt="Open">
        </div>
        <div class="quotes-header">
          <div class="quotes-header-text">Quotes (5)</div>
          <img class="icon-right" src="~/static/icons/next_2.svg" alt="Open">
        </div>
      </div>
      <div class="text-input">
        <img class="emoji" src="~/static/icons/happy.svg" alt="Emoji's">
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
import Tag from "@/components/AppTag";
import Note from "@/components/AppNote";

export default {
  name: "Playback",
  layout: "playback",
  data() {
    return {
      inputNote: "",
      activeNote: 1,
      tags: [{ id: 1, title: "Amsterdam" }, { id: 2, title: "16 to 20 years" }],
      data: [
        { id: 1, timestamp: 1.4, note: "De testpersoon komt gelukkig over." },
        {
          id: 2,
          timestamp: 1.5,
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
  components: { Tag, Note }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  .icon-back {
    cursor: pointer;
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
  background-color: white;
  background-color: transparent;
  .video {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.06);
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
}

.comments {
  // width: 550px;
  background-color: #fbfbfb;
  border-radius: 10px;
  box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.06);
  .notes-header {
    display: flex;
    justify-content: space-between;
    padding: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    .notes-header-text {
      font-size: 16px;
      font-weight: bold;
      color: #424242;
    }
    .icon-down {
      cursor: pointer;
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
    .note {
      cursor: pointer;
      padding: 25px;
      display: flex;
      align-items: center;
      &.active {
        box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.08);
      }
      .note-timestamp {
      }
      .note-divider {
        height: 40px;
        width: 2px;
        margin-left: 10px;
        margin-right: 10px;
        background-color: #f1f1f1;
        &.active {
          background-color: #daedf5;
        }
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
    box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.05);
    .findings-header-text {
      font-size: 16px;
      font-weight: bold;
      color: #424242;
    }
    .icon-right {
      cursor: pointer;
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
    .quotes-header-text {
      font-size: 16px;
      font-weight: bold;
      color: #424242;
    }
    .icon-right {
      cursor: pointer;
    }
  }
}
.text-input {
  margin-top: 50px;
  display: flex;
  .emoji {
    margin-right: 30px;
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