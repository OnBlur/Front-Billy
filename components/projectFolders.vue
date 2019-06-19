<template>
  <nuxt-link :to="{ path: 'project/' + id}" tag="div" class="project-table" exact>
    <div class="project-folders">
      <div>
        <img src="~assets/img/map-icon.svg" alt width="25px" height="25px">
      </div>
      <div>{{name}}</div>
      <div class="circle-outer">
        <div v-for="circle in cirlces" :key="circle.id" :style="{backgroundColor: circle.color}" class="circle">
          <div v-if="circle.status"></div>
        </div>
      </div>
      <div>
        <img v-for="image in members" :key="image.id" :src="image.url" width="25px" height="25px">
      </div>
      <div class="edited">
        <div>
          {{lastEdit}} door
          <b>{{editBy}}</b>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "projectFolders",
  data() {
    return {
      cirlces: [
        {id: 1, color: '#3fb1de', status: false},
        {id: 2, color: '#4cb421', status: false},
        {id: 3, color: '#ffcd07', status: true},
        {id: 4, color: '#ff4343', status: false},
      ]

    }
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      default: "Geen naam gevonden"
    },
    projects: {
      type: String,
      default: "0 projects"
    },
    members: {
      type: Array,
      require: false
    },
    lastEdit: {
      type: String,
      default: "Sometime"
    },
    editBy: {
      type: String,
      default: "Misha"
    }
  }
};
</script>

<style lang="scss" scoped>
.project-table {
  cursor: pointer;

  .circle-outer {
    display: flex;
    justify-content: space-around;
    /*width: 150px;*/
  }

  .circle {
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }

  .project-folders {
    width: 100%;
    color: #424242;
    display: flex;
    background-color: white;
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 10px;
  }
  div {
    width: 13em;
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

