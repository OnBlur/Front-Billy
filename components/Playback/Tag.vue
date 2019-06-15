<template>
  <div v-if="!hover" class="tag" @mouseover="hover = true">
    #
    <a>{{title}}</a>
  </div>
  <div v-else class="tag edit" @mouseleave="hover = false">
    <button class="edit-button" @click="editTag()">
      <a>Edit</a>
    </button>
    <button class="delete-button" @click="deleteTag()">
      <a>Delete</a>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      hover: false
    };
  },
  methods: {
    editTag() {
      console.log("pressed edit tag");
    },
    deleteTag() {
      console.log("pressed delete tag");
    }
  }
};
</script>

<style lang="scss" scoped>
.tag {
  cursor: pointer;
  background-color: white;
  margin-right: 10px;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  &.edit {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding-left: 0px;
    padding-right: 0px;
    button {
      height: 100%;
      border: none;
      background-color: white;
      &.edit-button {
        width: 60px;
        font-size: 13px;
        line-height: 1.88;
        border-left: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        &:hover {
          background-color: #f7f7f7;
        }
      }
      &.delete-button {
        width: 70px;
        font-size: 13px;
        line-height: 1.88;
        color: #ed5153;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        &:hover {
          background-color: #f7f7f7;
        }
      }
    }
  }
}
</style>