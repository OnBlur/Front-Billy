<template>
  <b-container ref="container">
    <b-row>
      <b-col>
          <div class="recent-text">Recent folders</div>
      </b-col>
    </b-row>
    <Folder :allData="data"/>
  </b-container>
</template>

<script>
import Folder from "@/components/Folder";

export default {
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
.header {
  display: flex;
  flex-wrap: wrap;

  .recent-text {
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #424242;
  }
}
</style>
