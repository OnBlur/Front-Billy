<template>
  <div class="container" ref="mainContainer">
    <AppHeader/>
    <LiveSearch/>
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import LiveSearch from "@/components/LiveSearch.vue";

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
        this.$refs.mainContainer.style.width = "calc(100% - 300px)";
        this.$refs.mainContainer.style.float = "right";
      } else {
        this.$refs.mainContainer.style.width = "100%";
      }
    }
  },
  components: {
    AppHeader,
    LiveSearch
  }
};
</script>
<style lang="scss" scoped>
.container {
  overflow: hidden;
  padding: 1rem 2rem;
  background: #eaecec;
}
</style>
