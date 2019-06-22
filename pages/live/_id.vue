<template>
  <b-row>
    <!-- Left -->
    <b-col md="3">
      <div class="system">
        <div class="time-text">Time</div>
        <Stopwatch
          @currentHrs="hours = $event"
          @currentMin="minutes = $event"
          @currentSec="seconds = $event"
          @clockStatus="clockStatus = $event"
        />
        <!-- <div class="current-time">1:20:23</div> -->
        <div class="connection" id="tooltip">
          <div class="icon wifi-3" :class="{ 'success': connected }">e</div>
          <div
            class="connection-text"
            :class="{ 'success': connected }"
          >{{connected ? "Connected" : "Disconnected"}}</div>
        </div>
        <b-tooltip target="tooltip" placement="bottom">{{connected ? tooltipSuccess : tooltipFail}}</b-tooltip>
      </div>
    </b-col>
    <!-- Right -->
    <b-col md="9">
      <div class="main">
        <div class="notes">
          <Note
            v-for="item in getNotesByVideoId"
            :key="item.id"
            :timestamp="trimTimestamp(+item.timestamp)"
            :note="item.content"
            :noteProperty="item.type"
            @editNote="editNote(item.id, $event)"
          />
        </div>
        <div class="text-input">
          <form v-on:submit.prevent="addNote">
            <input
              v-model="inputNote"
              type="text"
              placeholder="Write your note, findings or a quote here.."
            >
          </form>
        </div>
        <div class="text-input-divider"></div>
        <div class="emojis">
          <div class="icon smile-o">p</div>
          <div class="icon meh-o">r</div>
          <div class="icon frown-o">q</div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapMutations } from "vuex";
import { trimTimestamp } from "@/mixins";

import Note from "@/components/Live/Note";
import Stopwatch from "@/components/Live/Stopwatch";

export default {
  name: "Live",
  mixins: [trimTimestamp],
  layout: "playback",
  data() {
    return {
      id: this.$route.params.id,
      hours: null,
      minutes: null,
      seconds: null,

      connected: null,
      tooltipSuccess: "Internet and API connection is available",
      tooltipFail:
        "All your changes will be saved automatically when you’re offline.",
      offlineData: [],

      noteType: 0,
      inputNote: ""
    };
  },
  mounted() {},
  computed: {
    getNotesByVideoId() {
      return this.$store.getters["notes/getItemsByVideoId"](+this.id);
    },
    timestamp() {
      return this.minutes + "." + this.seconds;
    }
  },
  methods: {
    addNote() {
      // Save the note offline
      if (this.connected === false) {
        this.$store.commit("notes/addData", {
          timestamp: this.timestamp,
          content: this.inputNote,
          type: this.noteType,
          video_id: +this.id
        });
        this.offlineData.push({
          timestamp: this.timestamp,
          content: this.inputNote,
          type: this.noteType,
          video_id: +this.id
        });
        console.log("saved locally", this.offlineData);
      }
      // Save the note when online
      else {
        this.$store.dispatch("notes/addNote", {
          timestamp: this.timestamp,
          content: this.inputNote,
          type: this.noteType,
          video_id: +this.id
        });
      }

      this.inputNote = "";
    },
    editNote(noteId, text) {
      this.$store.dispatch("notes/editNote", {
        id: noteId,
        timestamp: this.timestamp,
        content: text,
        type: this.noteType,
        video_id: +this.id
      });
    },
    isOnline() {
      this.connected = window.navigator.onLine;
    },
    syncData() {
      console.log("Trying to sync...");
      for (let i = 0; i < this.offlineData.length; i++) {
        console.log("offline items:", this.offlineData.length);
        this.$store.dispatch("notes/addNote", this.offlineData[i]).then(() => {
          this.offlineData.splice(i, 1);
          this.$store.dispatch("notes/getAllInit");
          // this.$store.commit("notes/deleteData", id);
          // this.$store.getters["notes/getItemsByVideoId"];
        });
      }
    }
  },
  watch: {
    seconds: function(newQuestion, oldQuestion) {
      if (this.connected === true && this.offlineData.length > 0) {
        console.log(this.offlineData);
        // setTimeout(this.syncData(), 9000);
        this.syncData();
      }
      this.isOnline();
    }
  },
  components: { Note, Stopwatch }
};
</script>

<style lang="scss" scoped>
.system {
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .time-text {
    font-size: 30px;
    color: #424242;
  }

  .connection {
    cursor: pointer;
    display: flex;
    align-items: center;
    .icon {
      font-size: 30px;
      color: #ed5153;
      font-family: "icons";
      margin-right: 10px;
      &.success {
        color: #75de95;
      }
    }
    .connection-text {
      font-size: 16px;
      color: #ed5153;
      &.success {
        color: #75de95;
      }
    }
  }
}
.main {
  .notes {
    max-height: 650px;
    overflow-y: scroll;
    max-width: 750px;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: #e2e2e2;
    }
    &::-webkit-scrollbar-thumb {
      background: #424242;
      border-radius: 0px;
    }
  }
  .text-input {
    margin-top: 50px;
    display: flex;
    align-items: center;
    max-width: 660px;
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
    max-width: 660px;
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
}
</style>