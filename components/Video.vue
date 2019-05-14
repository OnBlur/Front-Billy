<template>
  <div class="video-container">
    <video class="video" width="400" ref="myVideo" controls>
      <source src="~/assets/bassie.mp4" type="video/mp4">
    </video>
    <button @click="setNewTimestamp">Create new Timestamp</button>
    <div class="timestamps">
      <div
        class="item"
        v-for="(item, index) in timestamps"
        :key="index"
        @click="goToTimestamp(item)"
      >
        <div v-text="item"></div>
      </div>
    </div>
    <input type="text" v-on:keydown="createNote" ref="note">
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      timestamps: []
    };
  },
  computed: {},
  methods: {
    setNewTimestamp() {
      this.timestamps.push(this.$refs.myVideo.currentTime);
    },
    goToTimestamp(value) {
      this.$refs.myVideo.currentTime = value;
    },
    createNote() {
      let startWritingTime; // First timestamp of the keystroke
      let writtenNote = this.$refs.note.value; // The note, should clear when enter has been pressed

      // this.timestamps.push(this.$refs.note);
      console.log(writtenNote);
      this.timestamps.push(this.$refs.myVideo.currentTime);
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.video-container {
  display: flex;
  flex-direction: column;

  .timestamps {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 400px;
    .item {
      cursor: pointer;
      margin: 5px;
      padding: 5px;
      background-color: #733713b5;
      border-radius: 10px;
      color: white;
    }
  }
}
</style>