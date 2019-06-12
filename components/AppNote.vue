<template>
  <div class="note" :class="{ 'active': active}">
    <div class="overlay" v-if="dropdown" @click="openDropdown"></div>
    <div class="note-timestamp">{{timestamp}}</div>
    <div class="note-divider" :class="{ 'active': active }"></div>
    <div class="note-text">{{note}}</div>
    <div class="dropdown" v-if="dropdown">
      <div class="edit">Edit Note</div>
      <div class="note-property">
        <div class="item note">
          <div class="icon folder">c</div>
          <div class="text">Note</div>
        </div>
        <div class="item quote">
          <div class="icon quote-left">l</div>
          <div class="text">Quote</div>
        </div>
        <div class="item finding">
          <div class="icon bulb">k</div>
          <div class="text">Finding</div>
        </div>
      </div>
      <div class="delete">Delete</div>
    </div>
    <div class="menu" v-if="active" @click="openDropdown()">
      <div class="dot-3">b</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: false
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
    }
  },
  methods: {
    openDropdown() {
      this.dropdown = !this.dropdown;
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
    background-color: green;
    right: 15%;
    // top: 200px;
    border-radius: 10px;
    .edit {
      font-size: 16px;
      color: #424242;

      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .note-property {
      display: flex;
      .item {
        width: 70px;
        height: 70px;

        &.note {
          font-size: 16px;
          color: #424242;
          background-color: blue;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        &.quote {
          font-size: 18px;
          color: #424242;
          background-color: white;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        &.finding {
          font-size: 18px;
          color: #424242;
          background-color: blue;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .icon {
          font-family: "icons";
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
</style>