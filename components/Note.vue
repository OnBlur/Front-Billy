<template>
  <div class="note" :class="{ 'active': active}" v-if="!edit">
    <div class="overlay" v-if="dropdown" @click="openDropdown"></div>
    <div class="note-timestamp">{{timestamp}}</div>
    <div class="note-divider" :class="{ 'active': active }"></div>
    <div class="note-text">{{note}}</div>
    <div class="dropdown" v-if="dropdown">
      <div class="edit" @click="startEditModus()">Edit Note</div>
      <div class="note-property">
        <div class="item note" :class="{ 'active': noteProperty === 1}">
          <div class="icon folder">c</div>
          <div class="text">Note</div>
        </div>
        <div class="item quote" :class="{ 'active': noteProperty === 2}">
          <div class="icon quote-left">l</div>
          <div class="text">Quote</div>
        </div>
        <div class="item finding" :class="{ 'active': noteProperty === 3}">
          <div class="icon bulb">k</div>
          <div class="text">Finding</div>
        </div>
      </div>
      <div class="delete" @click="deleteNote()">Delete</div>
    </div>
    <div class="menu" v-if="active" @click="openDropdown()">
      <div class="dot-3">b</div>
    </div>
  </div>
  <form v-on:submit.prevent="editNote" class="note-edit" v-else>
    <div class="note-input">
      <input class="timestamp-input" type="number" v-model="timestampInput">
      <input class="note-input" v-model="noteInput" type="text">
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
export default {
  data() {
    return {
      dropdown: false,
      edit: false,

      timestampInput: this.timestamp,
      noteInput: this.note
    };
  },
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
      default: "No note have been found"
    },
    noteProperty: {
      type: Number,
      default: 0
    }
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
      console.log(this.timestamp, this.note);
      this.$emit("editNote", [this.timestamp, this.note]);
    },
    deleteNote() {
      this.openDropdown();
      this.$emit("deleteNote");
    }
  }
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
    width: 2px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #daedf5;
    &.active {
      background-color: #bdebff;
    }
  }
  .note-text {
  }
  .dropdown {
    z-index: 900;
    position: absolute;
    // width: 300px;
    // height: 100px;
    background-color: white;
    right: 15%;
    // top: 200px;
    border-radius: 10px;
    box-shadow: 0 20px 70px 0 rgba(0, 0, 0, 0.08);
    margin-top: 75px;
    .edit {
      font-size: 16px;
      color: #424242;

      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #f2f2f2;
    }
    .note-property {
      display: flex;
      .item {
        width: 70px;
        height: 70px;

        &.active {
          background-color: #f2f2f2;
        }

        &.note {
          font-size: 16px;
          color: #424242;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        &.quote {
          font-size: 18px;
          color: #424242;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        &.finding {
          font-size: 18px;
          color: #424242;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .icon {
          font-family: "icons";
          font-size: 22px;
        }
      }
    }
    .delete {
      font-size: 16px;
      color: #ed5153;
      height: 50px;

      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid #f2f2f2;
      // background-color: red;
    }
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
    justify-content: flex-end;
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