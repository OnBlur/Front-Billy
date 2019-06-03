<template>
  <div class="container">
    <LeftSide :allNotes="todos" :videos="allVideos" :notes="allNotes"/>
    <RightSide/>
  </div>
</template>

<script>
import LeftSide from "@/components/Playback/LeftSide.vue";
import RightSide from "@/components/Playback/RightSide.vue";

export default {
  data() {
    return {};
  },
  computed: {
    todos() {
      return this.$store.state.todos.notes;
    },
    allVideos() {
      return this.$store.state.videos.data;
    },
    allNotes() {
      return this.$store.state.notes.data;
    }
  },
  components: {
    LeftSide,
    RightSide
  }
};
</script>

<style lang="scss" scoped>
</style>