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
          <div class="timestamp">@{{item.timestamp}} sec.</div>
          <div class="note" v-text="item.note"></div>
          <div class="removeItem">
            <div class="icon">x</div>
          </div>
        </div>
      </div>
      <form v-on:submit.prevent="addNote">
        <input v-model="inputNote" v-on:keydown="pauseOnKeydown" type="text" ref="note">
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
    goToTimestamp(value) {
      this.$refs.myVideo.currentTime = value;
    },
    pauseOnKeydown() {
      this.$refs.myVideo.pause();
    },
    addNote() {
      this.timestamps.push({
        timestamp: this.$refs.myVideo.currentTime,
        note: this.inputNote
      });
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
    input {
      width: 400px;
      margin-top: 10px;
    }
  }

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
      .timestamp {
        font-size: 10px;
        letter-spacing: 1px;
        line-height: 14px;
      }
    }
  }
  .removeItem {
    float: right;
    background-color: red;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -30px;
    cursor: pointer;
    .icon {
      right: 32px;
      width: 8px;
      height: 29px;
      color: white;
    }
  }
}
</style>