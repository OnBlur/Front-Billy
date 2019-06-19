<template>
  <section class="container">
    <div class="company" v-for="item in projects" :key="item.id">{{item.name}}</div>
  </section>
</template>

<script>
export default {
  name: "Company",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    projects() {
      return this.$store.getters["projects/getItemByCompanyId"](+this.id);
    }
  }
};
</script>

<style scoped>
</style>