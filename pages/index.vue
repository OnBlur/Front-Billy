<template>
  <div class="container" ref="mainContainer">
    <div class="row">
      <div class="col">
        <div class="recent-text">Recent folders</div>
      </div>
    </div>
    <div class="row folders">
      <div class="col">
        <div class="column" v-for="item in data.slice(0, 4)" :key="item.id">
          <h2 class="item-name">{{item.name}}</h2>
        </div>
      </div>
    </div>
    <!-- <Folder :allData="data"/> -->
  </div>
</template>

<script>
import Folder from "@/components/Folder";

export default {
  computed: {
    getRefFromStore() {
      return this.$store.state.stateStore.sidebarStatus;
    }
  },
  watch: {
    getRefFromStore() {
      if (this.$store.state.stateStore.sidebarStatus) {
        console.log("true?");
        this.$refs.mainContainer.style.width = "calc(100% - 300px)";
      } else {
        console.log("false?");
        this.$refs.mainContainer.style.width = "100%";
      }
    }
  },
  data() {
    return {
      data: [
        { id: 1, name: "Puur Schoonheid", img: "random" },
        { id: 2, name: "3 roots", img: "random" },
        { id: 3, name: "A&B Meester Schilders", img: "random" },
        { id: 4, name: " Puur Schoonheid", img: "random" },
        { id: 5, name: " dqwdwqd", img: "random" },
        { id: 6, name: " dqwdwqd", img: "random" },
        { id: 7, name: " dqwdwqd", img: "random" }
      ]
    };
  },
  components: { Folder }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .row {
    width: 100%;
    max-width: 1100px;
    .recent-text {
      width: 100%;

      font-size: 16px;
      font-weight: bold;
      color: #424242;
    }
  }

  .folders {
    max-width: 1100px;
    width: 100%;
  }
  .col {
    display: flex;
    justify-content: space-between;

    .column {
      background-image: url("~assets/img/map-icon.svg");
      background-size: cover;
      height: 136px;
      width: 203px;
      margin: 10px 0 0 10px;
      position: relative;

      .item-name {
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        color: white;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 16px;
        transform: translate(-50%, -50%);
        display: flex;
        flex-wrap: wrap;
      }
    }
    .column:nth-child(1) {
      margin-left: 0;
    }
  }
}
</style>
