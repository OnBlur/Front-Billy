<template>
  <div class="tags">
    <div class="tag" v-for="item in tags" :key="item.id">#{{item.title}}</div>
    <div class="tag custom">+ Add a tag here</div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
.tags {
  display: flex;

  .tag {
    cursor: pointer;
    background-color: white;
    padding: 15px 25px 15px 25px;
    margin-right: 10px;
    border-radius: 10px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
    &.custom {
      background-color: #424242;
      color: white;
    }
  }
}
</style>