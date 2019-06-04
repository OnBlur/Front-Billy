<template>
  <div class="contents">
    <div class="row">
      <div class="col-sm">
        <h1>Recent toegevoegd</h1>
      </div>
    </div>
    <Folder :allData="data"/>
  </div>
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
.contents {
  background-color: #ececec;

  h1 {
    font-family: OpenSans;
    font-weight: bold;
    color: #424242;
  }
}
</style>
