<template>
  <div class="note" :class="{ 'active': active }">
    <div class="note-timestamp">{{timestamp}}</div>
    <div class="note-divider" :class="{ 'active': active }"></div>
    <div class="note-text">{{note}}</div>
    <div class="menu" v-if="active">
      <div class="dot-3">b</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    timestamp: {
      type: Number,
      default: 0.0
    },
    note: {
      type: String,
      default: "No notes have been found"
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