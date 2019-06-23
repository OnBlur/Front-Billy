<template>
  <div class="project-table" exact>
    <nuxt-link :to="{ path: '../project/' + id}" tag="div" class="project-folders">
      <div>
        <div class="icon folder">c</div>
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
        <div class="last-update">{{lastUpdate}} door</div>
        <div class="user">Henk</div>
      </div>
    </nuxt-link>
    <div class="menu">
      <!-- <div class="icon dot-3">b</div> -->
      <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
        <template slot="button-content">
          <div class="icon dot-3">b</div>
        </template>
        <b-dropdown-item @click="editItem" v-b-modal.modal-2>Edit</b-dropdown-item>
        <b-dropdown-item @click="deleteItem">Delete</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectFolders",
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
.project-table {
  cursor: pointer;
  display: flex;

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
    justify-content: center;
    .last-update {
      width: auto;
    }
    .user {
      font-family: OpenSans-Bold;
      width: auto;
      margin-left: 5px;
    }
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

