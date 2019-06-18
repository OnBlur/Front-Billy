<template>
  <section class="container">
    <!-- <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo"> -->
    <h1 class="title">User</h1>
    <h2 class="info">{{ company }}</h2>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1
    }
  },
  computed: {
    company() {
      return this.$store.getters[("companies/getItem", 1)];
    }
  }
};
</script>

<style scoped>
</style>