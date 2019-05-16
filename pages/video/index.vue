<template>
  <div class="hoi">
    <Video :allNotes="todos"/>
    <div v-for="(item, index) in todos" :key="index" v-text="item"></div>
  </div>
</template>

<script>
import Video from "@/components/Video.vue";

export default {
  layout: "videoLayout",
  computed: {
    todos() {
      return this.$store.state.todos.notes;
    }
  },
  components: {
    Video
  }
};
</script>

<style lang="scss" scoped>
</style>