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
      <div class="menu">
        <!-- <div class="icon dot-3">b</div> -->
        <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
          <template slot="button-content">
            <div class="icon dot-3 dots">b</div>
          </template>
          <b-dropdown-item @click="editItem" v-b-modal.modal-2>Edit</b-dropdown-item>
          <b-dropdown-item @click="deleteItem">Delete</b-dropdown-item>
        </b-dropdown>
      </div>
    </nuxt-link>
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
      default: "Ooit"
    },
    editBy: {
      type: String,
      default: "Ruurd"
    }
  },
  data() {
    return {
      dropdown: false
    };
  },
  methods: {
    editItem() {
      this.$emit("editItem", this.id);
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
    color: $dark-grey;
    display: flex;
    background-color: $white;
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
      padding: 5px;
      border-radius: 50%;
      &:hover {
        background-color: $bg-color;
      }
      .icon {
        font-family: "icons";
        font-size: 20px;
        transform: rotate(90deg);
        width: 0;
        color: $black;
      }
      .dots {
        margin-top: -20px;
      }
    }
  }
}
</style>

