<template>
  <div class="row">
    <div class="column" v-for="item in allData.slice(0, 4)" :key="item.id">
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
*{outline: 1px red solid;}

.row {
  .column {
    background-image: url("~assets/img/map-icon.svg");
    background-size: cover;
    height: 200px;
    width: 250px;
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
      font-size: 2rem;
      transform: translate(-50%, -50%);
      display: flex;
      flex-wrap: wrap;
    }
  }
  .column:nth-child(1){
    margin-left: 0;
  }
}
</style>

