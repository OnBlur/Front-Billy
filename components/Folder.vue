<template>
  <div class="row folders">
    <div class="col">
      <div class="column">
        <h2 class="item-name">{{name}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Geen naam gevonden"
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  &.folders {
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
.col-sm:first-child {
  margin-left: 0;
}

.folders {
  justify-content: center;
}
</style>

