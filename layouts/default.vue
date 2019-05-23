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

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background: #f4f4f4;
}
a {
  color: #666;
  text-decoration: none;
}
ul {
  list-style: none;
}
.container {
  margin: 2rem auto;
  overflow: hidden;
  padding: 1rem 2rem;
  background: #fff;
}
</style>
