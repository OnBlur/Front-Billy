<template>
  <div class="note-wrapper" :class="{ 'simple': !propertyIcon.iconClass }">
    <div class="time">{{timestamp}}</div>
    <div class="divider"></div>
    <!-- <b-form-textarea
              id="textarea-no-resize"
              placeholder="Fixed height textarea"
              no-resize
              v-model="content"
    ></b-form-textarea>-->
    <!-- <textarea class="note" type="text" v-model="content"></textarea> -->
    <div class="note" contenteditable v-text="note"></div>
    <div class="icon" :class="propertyIcon.iconClass">{{propertyIcon.characterClass}}</div>
  </div>
</template>

<script>
import { ConvertPropertyIdToIcon } from "@/mixins";

export default {
  name: "LiveNote",
  mixins: [ConvertPropertyIdToIcon],
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
      edit: false,

      timestampInput: this.timestamp,
      noteInput: this.note
    };
  },
  methods: {
    editSwitch() {
      this.edit = !this.edit;
    },
    startEditModus() {
      this.editSwitch();
    },
    editNote() {
      console.log(this.timestamp, this.note);
      //   this.$emit("editNote", [this.timestamp, this.note]);
    }
  }
};
</script>

<style lang="scss" scoped>
.note-wrapper {
  padding: 30px;
  max-width: 660px;
  background-color: white;
  display: flex;
  // align-items: center;
  margin-bottom: 15px;
  border-radius: 10px;
  font-size: 16px;
  &.simple {
    background-color: #f8f8f8;
  }
  .time {
    margin-right: 17px;
  }
  .divider {
    width: 1px;
    height: 40px;
    background-color: #ececec;
  }
  .note {
    margin-left: 17px;
    max-width: 443px;
    width: 100%;

    &:focus .note-wrapper {
      box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.05);
    }
  }
  .icon {
    font-size: 25px;
    flex-grow: 1;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    font-family: "icons";
  }
  .form-control {
    resize: none;
    background-color: transparent;
    border-radius: 0;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    font-size: 16px;

    &:focus {
      outline: none !important;

      .note-wrapper {
        box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.05);
      }
    }
  }
}
</style>