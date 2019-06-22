<template>
  <div class="breadcrumbs">
    <div class="item folders">Folders</div>
    <div class="item comapny">{{getCompanyById.name}}</div>
    <div class="item project" v-if="projectName">{{projectName}}</div>
  </div>
</template>

<script>
export default {
  props: {
    companyId: {
      type: Number,
      required: true
    },
    projectName: {
      type: String,
      required: false
    }
  },
  computed: {
    getCompanyById() {
      return this.$store.getters["companies/getItem"](+this.companyId);
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  margin-bottom: 25px;
  margin-top: 50px;

  display: flex;
  .item {
    opacity: 0.55;
    font-family: OpenSans-Bold;
    font-size: 16px;
    line-height: 1.38;
    &::after {
      content: ">";
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>