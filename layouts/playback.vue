<template>
  <div class="content">
    <div class="icon menu-icon" @click="openMenu" v-if="!sidebarState">a</div>
    <AlertMessage/>
    <SideMenu v-if="sidebarState" @closeMenu="closeMenu"/>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import SideMenu from "@/components/SideMenu";
import AlertMessage from "@/components/UI/AlertMessage";

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
    AppHeader,
    SideMenu,
    AlertMessage
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  .icon {
    cursor: pointer;
    position: absolute;
    font-family: "icons";
    font-size: 20px;
    margin-top: 60px;
    margin-left: 60px;
  }
  .container {
    margin: 0px;
    margin-top: 130px;
    // padding-left: 140px;
    // padding-right: 140px;
  }
}
</style>
