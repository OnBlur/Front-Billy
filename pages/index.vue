<template>
  <div>
    <div class="row">
      <div class="breadcrumb">Alle bestanden ></div>
      <div class="divider"></div>
    </div>
    <div class="row">
      <div class="col">
        <div class="title">Recente bestanden</div>
      </div>
    </div>
    <div class="row folders">
      <div class="col">
        <RecentFolders
          v-for="item in recentFolders"
          :key="item.id"
          :name="item.name"
          @click.native="goToProject(item.id)"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="title">Bedrijfsmappen</div>
      </div>
    </div>
    <div class="row">
      <div class="folder">
        <div class="filters">
          <div></div>
          <div>Bedrijf</div>
          <div>Projecten</div>
          <div></div>
          <div>Laatst bewerkt</div>
        </div>
        <CompanyFolders
          v-for="item in allCompanies"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :projects="item.projects"
          :members="item.members"
          :lastEdit="item.lastEdit"
          :editBy="item.editBy"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RecentFolders from "@/components/RecentFolders";
import CompanyFolders from "@/components/CompanyFolders";

export default {
  name: "Dashboard",
  props: {
    sidebarStatus: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    allCompanies() {
      return this.$store.getters["companies/allData"];
    },
    recentFolders() {
      return this.$store.getters["companies/allData"].slice(0, 4);
    }
  },
  methods: {
    goToProject(id) {
      console.log(id);
    }
  },
  components: {
    RecentFolders,
    CompanyFolders
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 130px;
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
