<template>
  <div class="hoi">
    <Video :allNotes="todos" :videos="allVideos" :notes="allNotes"/>
    <div class="videos">
      <div class="video" v-for="(video, index) in allVideos" :key="index">
        <input type="text" v-model="video.name">
        <button @click="editVideo(video)">Edit</button>
        <button @click="deleteVideo(video.id)">Delete {{video.id}}</button>
      </div>
    </div>
    <button @click="addVideo">Nieuwe video Toevoegen</button>
  </div>
</template>

<script>
import Video from "@/components/Video.vue";

export default {
  data() {
    return {
      newVideoData: {
        project_id: 5,
        name: "Hans Anders",
        link: "link_to_video"
      }
    };
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
  methods: {
    addVideo() {
      this.$store.dispatch("videos/addVideo", this.newVideoData);
    },
    editVideo(item) {
      this.$store.dispatch("videos/editVideo", item);
    },
    deleteVideo(id) {
      this.$store.dispatch("videos/deleteVideo", id);
    }
  },
  components: {
    Video
  }
};
</script>

<style lang="scss" scoped>
.hoi {
  .videos {
    display: flex;
    flex-wrap: wrap;
    .video {
      margin-top: 10px;
      margin-right: 10px;
    }
  }
}
</style>