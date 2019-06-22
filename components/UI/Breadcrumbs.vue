<template>
  <div class="row">
    <div class="breadcrumbs">
      <nuxt-link tag="div" class="item folders" to="/">Folders</nuxt-link>
      <nuxt-link
        tag="div"
        class="item company"
        :to="{ path: '/company/' + getCompanyById.id}"
        v-if="companyId"
      >{{getCompanyById.name}}</nuxt-link>
      <div class="item project" v-if="projectName">{{projectName}}</div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  props: {
    companyId: {
      type: Number,
      required: false
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
.row {
  .breadcrumbs {
    margin-bottom: 30px;
    margin-top: 50px;
    margin-left: 13px;

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
  .divider {
    width: 100%;
    border-top: 1px solid #707070;
    opacity: 0.17;
    margin: 0px 15px 0px 15px;
    margin-bottom: 45px;
  }
}
</style>