<template>
  <div class="dropdown" v-if="dropdown">
    <div class="edit" @click="startEditModus()">Edit Note</div>
    <div class="note-type">
      <div class="item note" @click="changeType(0)" :class="{ 'active': noteProperty === 0}">
        <div class="icon clipboard-notes">s</div>
        <div class="text">Note</div>
      </div>
      <div class="item finding" @click="changeType(1)" :class="{ 'active': noteProperty === 1}">
        <div class="icon bulb">k</div>
        <div class="text">Finding</div>
      </div>
      <div class="item quote" @click="changeType(2)" :class="{ 'active': noteProperty === 2}">
        <div class="icon quote-left">l</div>
        <div class="text">Quote</div>
      </div>
    </div>
    <div class="delete" @click="deleteNote()">Delete</div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    dropdown: {
      type: Boolean,
      default: false
    },
    noteProperty: {
      type: Number,
      default: 0
    }
  },
  methods: {
    startEditModus() {
      this.$emit("startEditModus");
    },
    deleteNote() {
      this.$emit("deleteNote");
    },
    changeType(id) {
      this.$emit("changeType", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
  z-index: 900;
  position: absolute;
  // width: 300px;
  // height: 100px;
  background-color: $white;
  right: 15%;
  // top: 200px;
  border-radius: 10px;
  box-shadow: 0 20px 70px 0 rgba(0, 0, 0, 0.08);
  margin-top: 75px;
  .edit {
    font-size: 16px;
    color: $dark-grey;

    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    &:hover {
      background-color: $lines;
    }
  }
  .note-type {
    display: flex;
    .item {
      width: 70px;
      height: 70px;
      &:hover {
        background-color: $lines;
      }

      &.active {
        background-color: #f2f2f2;
      }

      &.note {
        font-size: 16px;
        color: $dark-grey;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      &.finding {
        font-size: 18px;
        color: $dark-grey;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .icon {
        font-family: "icons";
        font-size: 22px;
      }
      &.quote {
        font-size: 18px;
        color: $dark-grey;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
  }
  .delete {
    font-size: 16px;
    color: $red;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #f2f2f2;
    // background-color: red;
    &:hover {
      background-color: $lines;
    }
  }
}
</style>