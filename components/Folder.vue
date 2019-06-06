<template>
  <div class="row">
    <div class="col-sm" v-for="item in allData.slice(0, 4)" :key="item.id">
      <h2 class="item-name">{{item.name}}</h2>
    </div>
  </div>
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
.col-sm {
  background-image: url("~assets/img/map-icon.svg");
  background-size: cover;
  height: 150px;
  margin: 30px 0 0 30px;

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
.col-sm:first-child {
  margin-left: 0;
}
</style>

