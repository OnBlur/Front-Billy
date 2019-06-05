<template>
  <div class="contents">
    <b-col class="col" v-for="item in allData.slice(0, 4)" :key="item.id">
      <svg class="recent-files">
        <svg viewBox="0 0 278.62 187.82" class="recent-files">
          <path
            d="M101.66,187.82H10a10,10,0,0,1-10-10V10A10,10,0,0,1,10,0H92.45a10,10,0,0,1,10,10v4H268.62a10,10,0,0,1,10,10h0V177.81a10,10,0,0,1-10,10Z"
            transform="translate(0 0)"
          ></path>
        </svg>
      </svg>
      <h2 class="item-name">{{item.name}}</h2>
    </b-col>
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
.contents {
  display: flex;
  flex-wrap: wrap;

  .recent-files svg {
    fill: #424242;
    margin-top: 50px;
  }

  .item-name {
    width: 150px;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    color: #ffffff;
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1rem;
    display: flex;
    text-align: center;
    justify-content: space-around;
  }
}
</style>

