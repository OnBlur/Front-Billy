<template>
  <div class="note" :class="{ 'active': active }">
    <div class="note-timestamp">{{timestamp}}</div>
    <div class="note-divider" :class="{ 'active': active }"></div>
    <div class="note-text">{{note}}</div>
    <div class="dropdown" v-if="dropdown">
      <div class="edit">Edit Note</div>
      <div class="note-property">
        <div class="item notes">
          <div class="icon folder">c</div>
          <div class="text">Notes</div>
        </div>
        <div class="item quotes">
          <div class="icon quote-left">l</div>
          <div class="text">Quotes</div>
        </div>
        <div class="item findings">
          <div class="icon bulb">k</div>
          <div class="text">Findings</div>
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
      default: "No notes have been found"
    }
  },
  methods: {
    openDropdown() {
      this.dropdown = !this.dropdown;
      console.log(this.dropdown);
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
    position: absolute;
    width: 300px;
    // height: 100px;
    background-color: green;
    right: 15%;
    // top: 200px;
    border-radius: 10px;
    .edit {
      font-size: 20px;
      color: #424242;

      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .note-property {
      display: flex;
      .item {
        width: 100px;
        height: 100px;

        &.notes {
          font-size: 18px;
          color: #424242;
          background-color: blue;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        &.quotes {
          font-size: 18px;
          color: #424242;
          background-color: white;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        &.findings {
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
      font-size: 20px;
      color: #ed5153;
      height: 70px;

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