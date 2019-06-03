<template>
  <div class="left">
    <div class="header">
      <div class="icon-back">Arrow Left</div>
      <div
        class="beadcrumbs"
      >Company folders > 3 Roots > Projects > UMCG-44350 > Recording website 3 Roots</div>
    </div>
    <div class="divider"></div>
    <div class="info">
      <div class="title">UMCG-44350 > Recording website 3 Roots ( Alex de Vries )</div>
      <div class="date">January 22, 2018</div>
    </div>
    <div class="video-player">
      <video class="video" width="600" ref="myVideo" controls>
        <source src="~/assets/bassie.mp4" type="video/mp4">
      </video>
      <div class="navigation">
        <div class="pause">PAUSE</div>
        <div class="video-timestamp">1:40 / 4:50</div>
      </div>
      <div class="timeline"></div>
    </div>
    <div class="tags-wrapper">
      <div class="tags-title">Tags:</div>
      <div class="tags">
        <div class="tag">#Amsterdam</div>
        <div class="tag">#16 to 20 years</div>
        <div class="tag custom">+ Add a tag here</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Video",
  props: {
    allNotes: {
      type: Array,
      required: true
    },
    notes: {
      type: Array,
      required: true
    },
    videos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      inputNote: "",
      data: [
        { id: 1, timestamp: 1.4, note: "De testpersoon komt gelukkig over." },
        {
          id: 2,
          timestamp: 1.55,
          note: "Inschrijven vak weergeven in het midden van de website."
        },
        { id: 3, timestamp: 2.1, note: "De testpersoon komt gelukkig over." },
        {
          id: 4,
          timestamp: 2.3,
          note: "Inschrijven vak weergeven in het midden van de website."
        },
        { id: 5, timestamp: 3.1, note: "De testpersoon komt gelukkig over." },
        { id: 6, timestamp: 3.4, note: "De testpersoon komt gelukkig over." },
        { id: 7, timestamp: 4.4, note: "De testpersoon komt gelukkig over." }
      ]
    };
  },
  methods: {
    // Save timestamp and note onsubmit, clear the input field and resume the video
    addNote() {
      this.$store.commit("todos/addNote", {
        timestamp: this.$refs.myVideo.currentTime,
        note: this.inputNote
      });

      this.inputNote = "";
      this.playVideo();
    },
    // Retreive current time from video DOM element
    goToTimestamp(value) {
      this.$refs.myVideo.currentTime = value;
      this.pauseVideo();
    },
    deleteNote(position) {
      this.$store.commit("todos/deleteNote", position);
    },
    playVideo() {
      this.$refs.myVideo.play();
    },
    pauseVideo() {
      this.$refs.myVideo.pause();
    },
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
  components: {}
};
</script>

<style lang="scss" scoped>
</style>