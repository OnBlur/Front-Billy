<template>
  <div class="company-table" exact>
    <nuxt-link :to="{ path: 'company/' + id}" tag="div" class="company-folder">
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
    </nuxt-link>
    <div class="menu" @click="openDropdown()">
      <!-- <div class="icon dot-3">b</div> -->
      <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
        <template slot="button-content">
          <div class="icon dot-3">b</div>
        </template>
        <b-dropdown-item href="#">Edit</b-dropdown-item>
        <b-dropdown-item href="#" @click="deleteItem">Delete</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
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
  },
  data() {
    return {
      dropdown: false
    };
  },
  methods: {
    openDropdown(event) {
      console.log("openend");
      this.dropdown = !this.dropdown;
    },
    deleteItem() {
      this.$emit("deleteItem", this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.company-table {
  display: flex;
  .company-folder {
    cursor: pointer;
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

  .menu {
    // display: flex;
    // justify-content: flex-end;
    cursor: pointer;
    margin-left: 30px;
    width: auto;
    .dropdown {
      width: auto;
      .icon {
        font-family: "icons";
        font-size: 20px;
        transform: rotate(90deg);
        width: 0;
        color: black;
      }
    }
  }
}
</style>

