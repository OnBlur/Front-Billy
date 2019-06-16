<template>
  <div class="menu">
    <div class="icon times" @click="closeMenu">f</div>
    <div class="menu-content">
      <!-- Logo -->
      <div class="logo">
        <nuxt-link to="/" exact>
          <img src="~/assets/img/factore.png" alt="theFactor.e">
        </nuxt-link>
      </div>
      <!-- Account -->
      <div class="account">
        <div class="user-image">
          <img src="~/assets/img/profile.png" alt="John Doe">
        </div>
        <div class="user-info">
          <div class="user-name">John Doe</div>
          <div class="user-function">Designer</div>
        </div>
      </div>
      <!-- Folders -->
      <div class="folders">
        <div class="folders-header">Folders</div>
        <div class="menu-items">
          <ul>
            <!-- Files -->
            <nuxt-link to="/files" tag="li" class="menu-item" exact>
              <div class="menu-item-info">
                <div class="menu-icon">
                  <span class="admin">c</span>
                </div>
                <div class="label">Files</div>
              </div>
            </nuxt-link>
            <!-- Archieve -->
            <nuxt-link to="/archive" tag="li" class="menu-item" exact>
              <div class="menu-item-info">
                <div class="menu-icon">
                  <span class="file-text">t</span>
                </div>
                <div class="label">Archive</div>
              </div>
            </nuxt-link>
            <!-- Settings -->
            <nuxt-link to="/settings" tag="li" class="menu-item" exact>
              <div class="menu-item-info">
                <div class="menu-icon">
                  <span class="cog">j</span>
                </div>
                <div class="label">Settings</div>
              </div>
            </nuxt-link>
          </ul>
        </div>
      </div>
      <!-- Quick Links -->
      <div class="folders">
        <div class="folders-header">Quick Links</div>
        <div class="menu-items">
          <ul>
            <!-- Files -->
            <nuxt-link to="/playback" tag="li" class="menu-item" exact>
              <div class="menu-item-info">
                <div class="menu-icon">
                  <span class="admin">c</span>
                </div>
                <div class="label">theFactor.e</div>
              </div>
            </nuxt-link>
            <!-- Archieve -->
            <nuxt-link to="/livesearch" tag="li" class="menu-item" exact>
              <div class="menu-item-info">
                <div class="menu-icon">
                  <span class="admin">c</span>
                </div>
                <div class="label">NHL Stenden</div>
              </div>
            </nuxt-link>
            <!-- Archieve -->
            <nuxt-link to="/live" tag="li" class="menu-item" exact>
              <div class="menu-item-info">
                <div class="menu-icon">
                  <span class="admin">c</span>
                </div>
                <div class="label">Snakeware</div>
              </div>
            </nuxt-link>
          </ul>
        </div>
      </div>
      <!-- Logout -->
      <div class="logout">Logout</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    closeMenu() {
      this.$emit("closeMenu");
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes slide-right {
  0% {
    opacity: 0;
    -webkit-transform: translateZ(-10%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateZ(0);
  }
}

.menu {
  //   position: fixed;
  height: 100vh;
  width: 352px;
  background-color: #424242;
  -webkit-animation: slide-right 0.3s ease-out;
  -moz-animation: slide-right 0.3s ease-out;
  .icon {
    cursor: pointer;
    font-family: "icons";
    font-size: 20px;
    text-align: right;
    margin: 15px;
    color: white;
  }
  .menu-content {
    margin: 50px;
    .logo {
      img {
        width: 185px;
      }
    }
    .account {
      margin-top: 50px;
      display: flex;
      .user-image {
        margin-right: 25px;
        img {
          width: 45px;
          height: 45px;
        }
      }
      .user-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fafafa;
        .user-name {
          font-size: 16px;
          font-weight: 900;
        }
        .user-function {
          font-size: 14px;
        }
      }
    }
    .folders {
      margin-top: 60px;
      .folders-header {
        font-size: 20px;
        font-weight: bold;
        color: #fafafa;
      }
      .menu-items {
        // margin: 30px;
        // margin-left: 25px;
        margin-top: 20px;
        ul {
          padding: 0 0 0 0px;
        }
        li {
          cursor: pointer;
        }
        .menu-item {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 25px !important;
          margin-left: 0px !important;

          &.margin {
            margin-top: 45px !important;
          }

          &:hover {
            .menu-icon {
              opacity: 1 !important;
            }
            .label {
              color: white !important;
            }
          }

          &.nuxt-link-active {
            .menu-icon {
              opacity: 1 !important;
            }
            .label {
              color: white !important;
            }
          }

          .menu-item-info {
            height: 30px;
            cursor: pointer;
            width: 100%;
            display: flex;
            align-items: center;

            .label {
              display: flex;
              align-items: center;
              width: calc(100% - 40px);
              justify-content: space-between;

              color: #fafafa;
              height: 30px;
              font-size: 16px;
              line-height: 1.35;
              text-decoration: none;

              .action {
                // width: 95px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                // color: $white;
                font-size: 14px;
                font-weight: 900;
                line-height: 19px;
              }
            }

            &.profile-info {
              display: flex;
              justify-content: center;
              text-align: center;
              padding-bottom: 70px;
            }

            .menu-icon {
              margin-right: 10px;
              font-size: 25px;
              display: flex;
              align-items: center;
              font-family: "icons";
              color: #fafafa;
              //   opacity: 0.4;
              justify-content: center;
            }
          }
        }
      }
    }
    .logout {
      cursor: pointer;
      position: fixed;
      bottom: 37px;

      font-size: 16px;
      line-height: 1.35;
      color: #fafafa;
      text-decoration: underline;
      width: 300px;
      left: 0;
      display: flex;
      justify-content: center;
    }
  }
}
</style>