<template>
  <nuxt-link :to="{ path: 'company/' + id}" tag="div" class="company-table" exact>
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
  </nuxt-link>
</template>

<script>
export default {
  name: "companyFolders",

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
.company-table {
  cursor: pointer;

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

