<template>
  <div class="content">
    <div class="icon menu-icon" @click="openMenu" v-if="!sidebarState">a</div>
    <SideMenu v-if="sidebarState" @closeMenu="closeMenu"/>
    <div class="container">
      <LiveSearch/>
      <nuxt :sidebarStatus="sidebarState"/>
    </div>
  </div>
</template>

<script>
import LiveSearch from "@/components/LiveSearch.vue";
import SideMenu from "@/components/SideMenu";

export default {
  computed: {
    sidebarState() {
      return this.$store.getters["stateStore/getSidebarStatus"];
    }
  },
  methods: {
    openMenu() {
      this.$store.commit("stateStore/setSidebarStatus", true);
    },
    closeMenu() {
      this.$store.commit("stateStore/setSidebarStatus", false);
    }
  },
  components: {
    LiveSearch,
    SideMenu
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  // flex-direction: column;
  // align-items: flex-end;
  .icon {
    cursor: pointer;
    position: absolute;
    font-family: "icons";
    font-size: 20px;
    margin-top: 60px;
    margin-left: 60px;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
