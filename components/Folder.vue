<template>
  <div class="row">
    <div class="col-sm module mid" v-for="item in allData.slice(0, 4)" :key="item.id">
      <svg class="crop-shapes">
        <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="650">
            <image
              class="twombly"
              xlink:href="@/assets/img/screen.png"
              x="-30"
              y="-30"
              width="380"
              height="267"
            ></image>
          </pattern>
        </defs>

        <svg
          width="475.082px"
          height="475.082px"
          viewBox="0 0 475.082 475.082"
          fill="url(#img1)"
          style="enable-background:new 0 0 475.082 475.082;"
        >
          <g>
            <path
              d="M456.239,128.475c-12.56-12.562-27.597-18.842-45.11-18.842h-191.86v-9.136c0-17.511-6.283-32.548-18.843-45.107
		c-12.562-12.562-27.6-18.846-45.111-18.846H63.953c-17.515,0-32.551,6.283-45.111,18.846C6.28,67.949,0,82.986,0,100.497v274.088
		c0,17.508,6.28,32.545,18.842,45.104c12.562,12.565,27.6,18.849,45.111,18.849h347.175c17.514,0,32.551-6.283,45.11-18.849
		c12.566-12.56,18.843-27.597,18.843-45.104V173.59C475.082,156.078,468.805,141.042,456.239,128.475z"
            ></path>
          </g>
        </svg>
      </svg>
      <h2>{{item.name}}</h2>
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
.module {
  margin: 75px 75px 75px 75px;
  position: relative;
  background-size: cover;
}

.mid h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  color: #ffffff;
  text-transform: uppercase;
  margin-top: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1rem;
  transform: translate(-50%, -50%);
}

.crop-shapes {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>

