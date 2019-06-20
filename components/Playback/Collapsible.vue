<template>
  <div class="comments">
    <div v-for="item in headers" :key="item.id" class="notes-wrapper" :class="item.header">
      <button
        class="notes-header"
        :class="{ 'active': activeHeader === item.id }"
        @click="changeActiveNoteHeader(item.id)"
      >
        <div class="header-info">
          <div class="header-info-icon" :class="item.classIcon">{{item.map}}</div>
          <div class="header-info-text">{{item.header}} ({{item.comments.length}})</div>
        </div>
        <i class="icon chevron-left">n</i>
      </button>
      <!-- Note -->
      <div class="notes" v-if="activeHeader === item.id">
        <Note
          v-for="comment in item.comments"
          :key="comment.id"
          :active="comment.id === activeNote"
          :timestamp="trimTimestamp(+comment.timestamp)"
          :note="comment.content"
          :noteProperty="comment.type"
          @click.native="selectNote(comment)"
          @editNote="editNote(comment.id, $event)"
          @deleteNote="deleteNote(comment.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { trimTimestamp } from "@/mixins";
import Note from "@/components/Playback/Note";

export default {
  name: "Collapsible",
  mixins: [trimTimestamp],
  props: {
    allVideoNotes: {
      type: Array,
      default: function() {
        return [];
      }
    },
    getNotes: {
      type: Array,
      default: []
    },
    getFindings: {
      type: Array,
      default: []
    },
    getQuotes: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      headers: [
        {
          id: 1,
          header: "Notes",
          comments: this.getNotes,
          type: 0,
          classIcon: "clipboard-notes",
          map: "s"
        },
        {
          id: 2,
          header: "Findings",
          comments: this.getFindings,
          type: 1,
          classIcon: "bulb",
          map: "k"
        },
        {
          id: 3,
          header: "Quotes",
          comments: this.getQuotes,
          type: 2,
          classIcon: "quote-left",
          map: "l"
        }
      ],
      folders: [
        {
          name: "folder1",
          checks: [{ name: "check1.1" }, { name: "check1.2" }]
        },
        {
          name: "folder2",
          checks: [{ name: "check2.1" }, { name: "check2.2" }]
        }
      ],

      activeHeader: 1,
      activeNote: 1
    };
  },
  methods: {
    changeActiveNoteHeader(id) {
      this.activeHeader = id;
    },
    selectNote(item) {
      this.activeNote = item.id;
      this.$emit("gotoTimestamp", item.timestamp);
    },
    editNote(id, content) {
      this.$emit("editNote", id, content);
    },
    deleteNote(id) {
      this.$emit("deleteNote", id);
    }
  },
  components: {
    Note
  }
};
</script>

<style lang="scss" scoped>
.comments {
  max-width: 674px;
  background-color: #fbfbfb;
  border-radius: 10px;
  box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.06);
  // Wrapper
  .notes-wrapper {
    // Notes Header
    .notes-header {
      background-color: white;
      padding: 25px;
      padding-top: 20px;
      padding-bottom: 20px;
      width: 100%;
      border-style: hidden;

      display: flex;
      justify-content: space-between;
      align-items: center;
      &.active {
        .icon {
          transform: rotate(270deg);
        }
      }
      .header-info {
        display: flex;
        justify-content: center;
        align-items: center;
        .header-info-icon {
          margin-right: 10px;
          font-family: "icons";
          font-size: 20px;
        }
        .header-info-text {
          font-family: "OpenSans-Bold";
          color: #424242;
          font-size: 16px;
        }
      }
      .icon {
        font-family: "icons";
        font-style: normal;
        transform: rotate(180deg);
      }
    }
    // Notes
    .notes {
      margin-top: 5px;
      max-height: 470px;
      overflow-y: overlay;
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
  }
}
</style>