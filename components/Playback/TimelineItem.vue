<template>
  <div class="timeline-item" ref="timelineItems">
    <div class="icon" :class="propertyIcon.iconClass">{{propertyIcon.characterClass}}</div>
  </div>
</template>

<script>
export default {
  props: {
    timestamp: {
      type: Number,
      default: 0
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
  mounted() {
    //Initialize timeline items on the timeline
    let itemPosition = this.timestamp * 7;
    this.$refs.timelineItems.style.left = itemPosition + "%";
  },
  computed: {
    propertyIcon() {
      if (this.noteProperty === 1) {
        return { iconClass: "clipboard-notes", characterClass: "s" };
      } else if (this.noteProperty === 2) {
        return { iconClass: "bulb", characterClass: "k" };
      } else if (this.noteProperty === 3) {
        return { iconClass: "quote-left", characterClass: "l" };
      } else {
        return { iconClass: null, characterClass: null };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.timeline-item {
  position: absolute;
  cursor: pointer;
  width: 35px;
  height: 35px;
  background-color: #ffffff;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    font-family: "icons";
  }
}
</style>