<template>
  <div class="content">
    <div class="header" ref="mainHeader">
      <AppHeader/>
    </div>
    <b-container ref="container">
      <nuxt/>
    </b-container>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";

export default {
  computed: {
    getRefFromStore() {
      // return this.$store.getters["stateStore/getSidebarStatus"];
      return this.$store.state.stateStore.sidebarStatus;
    }
  },
  watch: {
    getRefFromStore() {
      if (this.$store.state.stateStore.sidebarStatus) {
        this.$refs.mainHeader.style.width = "calc(100% - 300px)";
        this.$refs.container.style.width = "calc(100% - 300px)";
        this.$refs.mainHeader.style.float = "right";
      } else {
        this.$refs.mainHeader.style.width = "100%";
        this.$refs.container.style.width = "100%";
      }
    }
  },
  components: {
    AppHeader
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .header {
    width: 100%;
    overflow: hidden;
    padding: 1rem 2rem;
    background: #eaecec;
  }
  .container {
    margin-top: 70px;
    padding-left: 140px;
    padding-right: 140px;
  }
}
</style>
