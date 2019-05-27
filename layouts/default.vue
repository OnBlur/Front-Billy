<template>
  <div class="container" ref="mainContainer">
    <AppHeader/>
    <nuxt/>
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
        this.$refs.mainContainer.style.marginLeft = "250px";
      } else {
        this.$refs.mainContainer.style.marginLeft = "0px";
      }
    }
  },
  components: {
    AppHeader
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin: 2rem auto;
  overflow: hidden;
  padding: 1rem 2rem;
  background: #F1F9FF;
}
</style>
