<template>
  <div class="col-sm module mid">
    <h2>{{allData}}</h2>
  </div>
  <!-- <div>{{allData}}</div> -->
</template>

<script>
export default {
  props: {
    allData: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #ececec;

  h1 {
    font-family: OpenSans;
    font-weight: bold;
    color: #424242;
  }

  .module {
    background: url("~assets/img/recent-folder.png");
    background-size: cover;
    width: 150px;
    height: 75px;
    margin: 75px 75px 75px 75px;
    position: relative;
  }

  .mid h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    color: white;
    text-transform: uppercase;
    margin-top: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1rem;
    transform: translate(-50%, -50%);
  }
}
</style>

