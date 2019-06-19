<template>
  <div class="note" :class="{ 'active': active}" v-if="!edit">
    <div class="overlay" v-if="dropdown" @click="openDropdown"></div>
    <div class="note-timestamp">{{timestamp}}</div>
    <div class="note-divider" :class="{ 'active': active }"></div>
    <div class="note-text">{{note}}</div>
    <Dropdown
      :dropdown="dropdown"
      :noteProperty="noteProperty"
      @startEditModus="startEditModus()"
      @changeType="editNoteType($event)"
      @deleteNote="deleteNote()"
    />
    <div class="menu" v-if="active" @click="openDropdown()">
      <div class="dot-3">b</div>
    </div>
  </div>
  <form v-on:submit.prevent="editNote" class="note-edit" v-else>
    <div class="note-input">
      <input type="text" class="timestamp-input" v-model="timestampInput">
      <input type="text" class="note-input" v-model="note">
    </div>
    <div class="buttons">
      <button class="save" @click="editNote">
        <i>Save</i>
      </button>
      <button class="cancel" @click="editSwitch">
        <i>Cancel</i>
      </button>
    </div>
  </form>
</template>

<script>
import Dropdown from "@/components/Playback/Dropdown";

export default {
  name: "PlaybackNote",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    timestamp: {
      type: String,
      default: 0.0
    },
    note: {
      type: String,
      default: "No note has been found"
    },
    noteProperty: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      dropdown: false,
      edit: false,

      timestampInput: this.timestamp,
      noteInput: this.note,
      noteType: this.noteProperty
    };
  },
  methods: {
    editSwitch() {
      this.edit = !this.edit;
    },
    openDropdown() {
      this.dropdown = !this.dropdown;
    },
    startEditModus() {
      this.openDropdown();
      this.editSwitch();
    },
    editNote() {
      this.$emit("editNote", {
        timestamp: this.timestamp,
        content: this.note,
        type: this.noteType
      });
      this.edit = false;
    },
    editNoteType(type) {
      this.noteType = type;
      this.openDropdown();
      this.editNote();
    },
    deleteNote() {
      this.openDropdown();
      this.$emit("deleteNote");
    }
  },
  components: { Dropdown }
};
</script>

<style lang="scss" scoped>
.note {
  cursor: pointer;
  padding: 25px;
  display: flex;
  align-items: center;
  &.active {
    box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.08);
  }
  .overlay {
    cursor: auto;
    position: fixed;
    // background-color: red;
    opacity: 0.4;
    height: 100%;
    width: 100%;
    z-index: 700;
    top: 0;
    left: 0;
  }
  .note-timestamp {
  }
  .note-divider {
    height: 40px;
    padding-left: 2px;
    margin-right: 10px;
    margin-left: 10px;
    background-color: #daedf5;
    &.active {
      background-color: #bdebff;
    }
  }
  .note-text {
    max-width: 80%;
  }
  .menu {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    .dot-3 {
      font-family: "icons";
      font-size: 17px;
      transform: rotate(90deg);
    }
  }
}
.note-edit {
  padding: 25px;
  box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.08);
  .note-input {
    display: flex;
    .timestamp-input {
      width: 15%;
      margin-right: 15px;
    }
    .note-input {
      width: 100%;
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    .save {
      padding: 10px;
      margin-right: 20px;

      cursor: pointer;
      background-color: white;
      padding: 15px 25px 15px 25px;
      margin-right: 10px;
      border-radius: 10px;
      background-color: #424242;
      color: white;
      border: none;
    }
    .cancel {
      cursor: pointer;
      background-color: white;
      padding: 15px 25px 15px 25px;
      margin-right: 10px;
      border-radius: 10px;
      box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
      border: none;
    }
  }
}
</style>