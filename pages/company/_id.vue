<template>
  <section class="wrapper">
    <div class="row">
    <div class="col">
      <div class="title">Folders > {{getCompanyById.name}}</div>
    </div>
    </div>
    <div class="row">
      <div class="folder">
        <div class="filters">
          <div></div>
          <div>Name</div>
          <div>Status</div>
          <div></div>
          <div>Last edit</div>
        </div>
        <projectFolders
          v-for="item in projects"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :status="item.status"
          :lastUpdate="item.updated_at"
        />
      </div>
    </div>
  </section>
</template>

<script>
import projectFolders from "@/components/projectFolders";

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
    },
    getCompanyById(){
      return this.$store.getters["companies/getItem"](+this.id);
    }
  },
  components: {
    projectFolders
  }
};
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .row {
      width: 100%;
      max-width: 1100px;
      .title {
        width: 100%;
        font-size: 1.2em;
        font-weight: bold;
        color: #424242;
        margin-bottom: 25px;
        margin-top: 50px;
      }
      .breadcrumb {
        margin-top: 50px;
        font-family: OpenSans;
        font-size: 1em;
        font-weight: bold;
        color: #171717;
        opacity: 0.55;
      }
      .divider {
        width: 100%;
        border-top: 1px solid #707070;
        opacity: 0.17;
        margin: 0px 15px 0px 15px;
      }
    }
    .folder {
      width: 100%;
      margin-right: 13px;
      margin-left: 13px;
    }
    .filters {
      width: 100%;
      color: #424242;
      display: flex;
      margin-bottom: 10px;
      padding: 15px;
      border-radius: 10px;

      div {
        width: 13em;
      }
    }
  }

  .col {
    display: flex;
    justify-content: space-between;
  }
</style>
