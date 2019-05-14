<template>
  <div class="wrapper-container">
    <div class="video-container">
      <video class="video" width="600" ref="myVideo" controls>
        <source src="~/assets/bassie.mp4" type="video/mp4">
      </video>
    </div>
    <div class="notes">
      <div class="timestamps">
        <div
          class="item"
          v-for="(item, index) in timestamps"
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
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      inputNote: "",
      timestamps: []
    };
  },
  methods: {
    // Save timestamp and note onsubmit, clear the input field and resume the video
    addNote() {
      this.timestamps.push({
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
      this.timestamps.splice(position, 1);
    },
    playVideo() {
      this.$refs.myVideo.play();
    },
    pauseVideo() {
      this.$refs.myVideo.pause();
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.wrapper-container {
  display: flex;
  flex-direction: row;

  .notes {
    width: 400px;
    margin-left: 10px;

    .timestamps {
      height: 337px;
      overflow-y: scroll;
      background-color: #e0e0e0;
      &::-webkit-scrollbar {
        display: none;
      }
      .item {
        cursor: pointer;
        margin: 5px;
        padding: 5px;
        background-color: white;
        color: #4e4e4e;
        .note-header {
          display: flex;
          justify-content: space-between;
          .timestamp {
            font-size: 10px;
            letter-spacing: 1px;
            line-height: 14px;
          }
          .removeItem {
            /* float: right; */
            background-color: red;
            height: 20px;
            width: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            /* margin-top: -30px; */
            cursor: pointer;
            .delete {
              font-size: 10px;
              color: white;
              font-weight: bold;
            }
          }
        }
      }
    }
    form {
      display: flex;
      margin-top: 10px;
      input {
        width: 400px;
      }
    }
  }
}
</style>