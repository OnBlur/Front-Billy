<template>
  <div class="hoi">
    <Video :allNotes="todos" :videos="allVideos" :notes="allNotes"/>
  </div>
</template>

<script>
import Video from "@/components/Video.vue";

export default {
  
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
    Video
  }
};
</script>

<style lang="scss" scoped>
</style>