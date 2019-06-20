<template>
  <nuxt-link :to="{ path: 'company/' + id}" tag="div" class="row" exact>
    <div class="col">
      <div class="column">
        <h2 class="item-name">{{name}}</h2>
        <div class="blue-line"></div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      default: "Geen naam gevonden"
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  cursor: pointer;
  &.folders {
    max-width: 1100px;
    width: 100%;
    .blue-line {
      width: 35%;
      border-top: 2px solid #2699fb;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-top: 25px;
    }
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
        text-align: center;
      }
    }
    .column:nth-child(1) {
      margin-left: 0;
    }
  }
}
.col-sm:first-child {
  margin-left: 0;
}

.folders {
  justify-content: center;
}
</style>

