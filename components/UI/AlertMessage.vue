<template>
  <div class="alert" v-if="versionMessage">
    <p class="info">{{info}}</p>
    <nuxt-link :to="link" tag="button" class="link" exact>UPDATE</nuxt-link>
    <span class="closebtn times" @click="closeAlert">f</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "A new version of Front Billy is availible",
      link: "/update"
    };
  },
  created() {
    if (
      this.$store.getters["stateStore/getCurrentVersion"] !==
      this.$store.getters["stateStore/getLatestVersion"]
    ) {
      this.$store.commit("stateStore/setAlertMessageStatus", true);
    }
  },
  computed: {
    versionMessage() {
      return this.$store.getters["stateStore/getAlertMessageStatus"];
    }
  },
  methods: {
    closeAlert() {
      this.visible = false;
      this.$store.commit("stateStore/setAlertMessageStatus", false);
    }
  }
};
</script>

<style lang="scss" scoped>
@-webkit-keyframes slide {
  100% {
    left: 0;
  }
}

@keyframes slide {
  100% {
    left: 0;
  }
}

.alert {
  padding: 20px;
  background-color: #2196f3;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 900;
  margin: 20px;
  position: absolute;
  left: -100%;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 2s;
  animation: slide 0.5s forwards;
  animation-delay: 2s;

  display: flex;
  justify-content: center;
  align-items: center;
  .info {
  }
  .link {
    font-weight: 900;
    margin-left: 20px;
    border: none;
    background-color: transparent;
  }
  .closebtn {
    margin-left: 20px;
    color: white;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
    font-family: "icons";
    &:hover {
      color: black;
    }
  }
}
</style>