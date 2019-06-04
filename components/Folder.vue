<template>
  <div class="row">
    <b-col class="recent-col" v-for="item in allData.slice(0, 4)" :key="item.id">
      <svg class="crop-shapes">
        <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlink:href="@/assets/img/screen.png" x="-30" y="-30" width="380" height="267"></image>
          </pattern>
        </defs>

        <svg fill="url(#img1)" viewBox="0 0 278.62 187.82">
          <g>
            <path
              d="M101.66,187.82H10a10,10,0,0,1-10-10V10A10,10,0,0,1,10,0H92.45a10,10,0,0,1,10,10v4H268.62a10,10,0,0,1,10,10h0V177.81a10,10,0,0,1-10,10Z"
              transform="translate(0 0)"
            ></path>
          </g>
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
.recent-col {
  display: flex;
  justify-content: center;
  align-items: center;

  .item-name {
    width: 150px;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    color: #ffffff;
    text-transform: uppercase;
    // margin-top: 50px;
    position: absolute;
    // top: 50%;
    // left: 50%;
    font-size: 1rem;
    // transform: translate(-50%, -50%);

    display: flex;
    text-align: center;
    justify-content: center;
  }
}

.crop-shapes {
  width: 100%;
  // position: absolute;
  // right: 0;
  // left: 0;
  // top: 0;
  // bottom: 0;
  // margin: auto;
}
</style>

