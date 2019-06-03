<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h1>Recent toegevoegd</h1>
      </div>
    </div>
    <div class="row">
      <!-- <Folder :note="inputNote"> -->
      <div class="col-sm recent-folder">One of three columns</div>
      <div class="col-sm recent-folder">One of three columns</div>
      <div class="col-sm recent-folder">One of three columns</div>
    </div>
  </div>
</template>

<script>
// import Folder from "~/components/Folder";

// export default {
//   data() {
//     return {
//       inputNote: "asdasdada"
//     };
//   },
//   components: {Folder}
// };
</script>

<style lang="scss" scoped>
.recent-folder {
  background-image: url("~assets/img/recent-folder.png");
  width: 2em;
}
</style>
