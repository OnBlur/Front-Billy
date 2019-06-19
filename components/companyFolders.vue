<template>
  <div class="company-table">
    <div class="company-folders">
      <div>
        <img src="~assets/img/map-icon.svg" alt width="25px" height="25px">
      </div>
      <div>{{name}}</div>
      <div>{{projects}}</div>
      <div>
        <img v-for="image in members" :key="image.id" :src="image.url" width="25px" height="25px">
      </div>
      <div class="edited">
        <div>
          {{lastEdit}} door
          <b>{{editBy}}</b>
        </div>
        <!-- <div class="editby">{{item.editBy}}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "companyFolders",

  props: {
    name: {
      type: String,
      default: "Geen naam gevonden"
    },
    projects: {
      type: String,
      default: "0 projects"
    },
    members: {
      type: Object,
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
.company-table {
  width: 100%;
  max-height: 350px;
  overflow-y: scroll;
  .company-folders {
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

