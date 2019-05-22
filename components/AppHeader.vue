<template>
  <div>
    <nav class="navbar">
      <span class="open-slide">
        <a href="#" @click="openSlideMenu">
          <img src="~/assets/img/hamburger.png" alt="Menu" height="25px" width="25px">
        </a>
      </span>
    </nav>

    <div id="side-menu" class="side-nav" ref="sideMenu">
      <a href="#" class="btn-close" @click="closeSlideMenu">&times;</a>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/video">Video</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/livesearch">Live Search</nuxt-link>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",

  methods: {
    openSlideMenu() {
      this.$refs.sideMenu.style.width = "250px";
      this.$store.state.stateStore.sidebarElement = true;
    },
    closeSlideMenu() {
      this.$refs.sideMenu.style.width = "0";
      this.$store.state.stateStore.sidebarElement = false;
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #3b5998;
  overflow: hidden;
  height: 63px;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar ul {
  margin: 8px 0 0 0;
  list-style: none;
}

.navbar a:hover {
  background-color: #ddd;
  color: #000;
}

.side-nav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}

.side-nav a {
  padding: 10px 10px 10px 30px;
  text-decoration: none;
  font-size: 22px;
  color: #ccc;
  display: block;
  transition: 0.3s;
}

.side-nav a:hover {
  color: #fff;
}

.side-nav .btn-close {
  position: absolute;
  top: 0;
  right: 22px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left 0.5s;
  padding: 20px;
  overflow: hidden;
  width: 100%;
}
</style>
