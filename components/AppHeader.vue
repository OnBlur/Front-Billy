<template>
  <div class="main-nav">
    <span class="open-slide">
      <a href="#" @click="openSlideMenu">
        <img src="~/assets/img/hamburger.png" alt="Menu" height="25px" width="25px" ref="menuIcon">
      </a>
    </span>
    <div id="side-menu" class="side-nav" ref="sideMenu">
      <a href="#" class="btn-close" @click="closeSlideMenu">&times;</a>
      <nuxt-link to="/">
        <img src="~/assets/img/factore.jpg" alt width="185px" height="105px">
      </nuxt-link>
      <div class="profile">
        <img src="~/assets/img/profile.png" alt width="50px" height="50px">John Doe
      </div>
      <h1>Bestanden</h1>

      <nuxt-link to="/">
        <img src="~/assets/img/folder.png" alt>Alle bestanden
      </nuxt-link>
      <nuxt-link to="#">
        <img src="~/assets/img/garbage.png" alt>Prullenbak
      </nuxt-link>
      <nuxt-link to="#">
        <img src="~/assets/img/settings.png" alt>Instellingen
      </nuxt-link>
      <h1 class="quick">Quick Links</h1>
      <nuxt-link to="/video">
        <img src="~/assets/img/folder.png" alt>Video
      </nuxt-link>
      <nuxt-link to="/livesearch">
        <img src="~/assets/img/folder.png" alt>Live Search
      </nuxt-link>
      <nuxt-link to="/#" class="logout">Uitloggen</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",

  computed: {
    sidebarStatus() {
      return this.$store.state.stateStore.sidebarStatus;
    }
  },
  methods: {
    openSlideMenu() {
      this.$refs.sideMenu.style.width = "300px";
      this.$store.state.stateStore.sidebarStatus = true;
      this.$refs.menuIcon.style.display = "none";
    },
    closeSlideMenu() {
      this.$refs.sideMenu.style.width = "0";
      this.$store.state.stateStore.sidebarStatus = false;
      this.$refs.menuIcon.style.display = "unset";
    }
  },
  watch: {
    sidebarStatus() {
      if (this.$store.state.stateStore.sidebarStatus) {
        this.openSlideMenu();
      } else {
        this.closeSlideMenu();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main-nav {
  .side-nav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(255, 255, 255);
    opacity: 0.9;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
    border-right: 1px solid #4a4a4a;

    a {
      padding: 10px 10px 10px 30px;
      text-decoration: none;
      font-size: 17px;
      color: #6d6d6d;
      display: block;
      transition: 0.3s;

      &:hover {
        color: rgb(128, 126, 126);
      }

      img {
        margin-right: 10px;
      }
    }
    .profile {
      padding: 10px 10px 10px 30px;
      font-weight: bold;
      font-size: 17px;
      color: #6d6d6d;
      display: block;
      transition: 0.3s;
      margin-bottom: 25px;

      img {
        margin-right: 10px;
      }
    }
    h1 {
      padding: 10px 10px 10px 30px;
      text-decoration: none;
      font-size: 22px;
      color: #6d6d6d;
      display: block;
      transition: 0.3s;
    }
    .quick {
      margin-top: 25px;
    }
    .logout {
      position: absolute;
      bottom: 10px;
    }
  }

  .open-slide img {
    margin-top: 10px;
    position: absolute;
  }
  .side-nav .btn-close {
    position: absolute;
    top: 0;
    right: 22px;
    font-size: 36px;
    margin-left: 50px;
  }
}
</style>
