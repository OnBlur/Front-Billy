<template>
  <div class="content">
    <div class="header" ref="mainHeader">
      <AppHeader/>
      <LiveSearch/>
    </div>
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import LiveSearch from "@/components/LiveSearch.vue";

export default {
  computed: {
    getRefFromStore() {
      return this.$store.state.stateStore.sidebarStatus;
    }
  },
  watch: {
    getRefFromStore() {
      if (this.$store.state.stateStore.sidebarStatus) {
        this.$refs.mainHeader.style.width = "calc(100% - 300px)";
        this.$refs.mainHeader.style.float = "right";
      } else {
        this.$refs.mainHeader.style.width = "100%";
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
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .header {
    width: 100%;
    overflow: hidden;
    padding: 1rem 2rem;
    background: #eaecec;

    // width: calc(100% - 300px);
    /* float: right; */
    /* justify-content: end; */
    /* display: flex; */
  }
}
</style>
