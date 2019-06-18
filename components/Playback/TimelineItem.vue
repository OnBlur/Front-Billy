<template>
  <div class="timeline-item" ref="timelineItems">
    <div class="icon" :class="propertyIcon.iconClass">{{propertyIcon.characterClass}}</div>
  </div>
</template>

<script>
import { ConvertPropertyIdToIcon } from "@/mixins";

export default {
  name: "TimelineItem",
  mixins: [ConvertPropertyIdToIcon],
  props: {
    timestamp: {
      type: String,
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