<template>
  <div class="tag">#{{title}}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.tag {
  cursor: pointer;
  background-color: white;
  padding: 15px 25px 15px 25px;
  margin-right: 10px;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
}
</style>