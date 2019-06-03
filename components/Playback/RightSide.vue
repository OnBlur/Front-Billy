<template>
  <div class="right">
    <div class="comments">
      <div class="notes-header">
        <div>Notes (30)</div>
        <div class="arrow-down-icon">^</div>
      </div>
      <div class="notes">
        <div class="note note-active">
          <div class="note-timestamp">1:40</div>
          <div class="note-divider note-divider-active"></div>
          <div class="note-text">De testpersoon komt gelukkig over.</div>
        </div>
        <div class="note" v-for="item in data" :key="item.id">
          <div class="note-timestamp">{{item.timestamp}}</div>
          <div class="note-divider"></div>
          <div class="note-text">{{item.note}}</div>
        </div>
      </div>
      <div class="findings-header">
        <div>Findings (13)</div>
        <div class="arrow-down-icon">^</div>
      </div>
      <div class="quotes-header">
        <div>Quotes (5)</div>
        <div class="arrow-down-icon">^</div>
      </div>
    </div>
    <div class="text-input">
      <div class="emoji">:)</div>
      <form v-on:submit.prevent="addNote">
        <input
          v-model="inputNote"
          v-on:keydown="pauseVideo"
          type="text"
          ref="note"
          placeholder="Write your note, findings or a quote here.."
        >
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="text-input-divider"></div>
  </div>
  <!-- <div class="wrapper-container">
    <div class="video-container">
      <video class="video" width="600" ref="myVideo" controls>
        <source src="~/assets/bassie.mp4" type="video/mp4">
      </video>
    </div>
    <div class="notes">
      <div class="timestamps">
        <div
          class="item"
          v-for="(item, index) in allNotes"
          :key="index"
          @click="goToTimestamp(item.timestamp)"
        >
          <div class="note-header">
            <div class="timestamp">@{{item.timestamp}} sec.</div>
            <div class="removeItem" @click="deleteNote(index)">
              <div class="delete">delete</div>
            </div>
          </div>
          <div class="note" v-text="item.note"></div>
        </div>
      </div>
      <form v-on:submit.prevent="addNote">
        <input v-model="inputNote" v-on:keydown="pauseVideo" type="text" ref="note">
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>-->
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