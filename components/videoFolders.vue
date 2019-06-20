<template>
  <nuxt-link :to="{ path: '../project/' + id}" tag="div" class="project-table" exact>
    <div class="project-folders">
      <div>
        <div class="icon play">m</div>
      </div>
      <div>{{name}}</div>
      <div class="circle-outer">
        <div
          v-for="circle in cirlces"
          :key="circle.id"
          :style="{backgroundColor: circle.color}"
          class="circle"
        >
          <div v-if="circle.status === status" class="check">u</div>
        </div>
      </div>
      <div class="edited">
        <div>
          {{lastUpdate}} door
          <b>Henk</b>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "videoFolder",
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      default: "Geen naam gevonden"
    },
    status: {
      type: Number
    },
    lastUpdate: {
      type: String
    }
  },
  data() {
    return {
      cirlces: [
        { id: 1, color: "#3fb1de", status: 0 },
        { id: 2, color: "#4cb421", status: 1 },
        { id: 3, color: "#ffcd07", status: 2 },
        { id: 4, color: "#ff4343", status: 3 }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.project-table {
  cursor: pointer;

  .circle-outer {
    display: flex;
    justify-content: space-around;
  }

  .circle {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .check {
      font-family: "icons";
      color: #fff;
    }
  }

  .project-folders {
    width: 100%;
    color: #424242;
    display: flex;
    background-color: white;
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    width: 13em;
    .icon {
      font-family: "icons";
      font-size: 25px;
    }
  }

  .edited {
    display: flex;
    flex-grow: 1.5;
  }

  .editby {
    font-weight: bold;
    margin-left: 10px;
  }
}
</style>