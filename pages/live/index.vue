<template>
  <b-row>
    <!-- Left -->
    <b-col md="3">
      <div class="system">
        <div class="time-text">Time</div>
        <div class="current-time">1:20:23</div>
        <div class="connection" id="tooltip">
          <div class="icon wifi-3" :class="{ 'success': connected }">e</div>
          <div class="connection-text" :class="{ 'success': connected }">Connected</div>
        </div>
        <b-tooltip target="tooltip" placement="bottom">{{connected ? tooltipSuccess : tooltipFail}}</b-tooltip>
      </div>
    </b-col>
    <!-- Right -->
    <b-col md="9">
      <div class="main">
        <div class="notes">
          <Note
            v-for="item in allNotes"
            :key="item.id"
            :timestamp="trimTimestamp(+item.timestamp)"
            :note="item.content"
            :noteProperty="item.type"
            @editNote="editNote($event)"
          />
        </div>
        <div class="text-input">
          <form v-on:submit.prevent="addNote">
            <input
              v-model="inputNote"
              type="text"
              ref="note"
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

export default {
  name: "Live",
  mixins: [trimTimestamp],
  layout: "playback",
  data() {
    return {
      currentTime: null,
      connected: true,
      inputNote: "",
      timestamp: 4.3,
      tooltipSuccess: "Internet and API connection is available",
      tooltipFail:
        "All your changes will be saved automatically when you’re offline."
    };
  },
  computed: {
    allNotes() {
      return this.$store.getters["notes/allData"];
    }
  },
  methods: {
    addNote() {
      this.$store.commit("todos/addNote", {
        timestamp: this.timestamp,
        note: this.inputNote
      });

      this.inputNote = "";
      this.playVideo();
    },
    editNote(content) {}
  },
  watch: {
    allNotes() {
      console.log("Something has been changed in store: AllNotes");
    }
  },
  components: { Note }
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
  .current-time {
    font-size: 50px;
    color: #424242;
    font-weight: 900;
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