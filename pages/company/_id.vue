<template>
  <section class="wrapper">
    <Breadcrumbs :companyId="getCompanyById.id"/>
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
          @editItem="editItem($event)"
          @deleteItem="deleteItem($event)"
        />
      </div>
    </div>
    <FloatingActionButton toolTip="Projectmap toevoegen" iconClass="folder-add" iconLetter="d"/>
    <!-- Create Modal -->
    <b-modal id="modal-1" ref="modal">
      <h1 class="create-modal-title">Projectmap toevoegen</h1>
      <b-form v-on:submit.prevent="onSubmit">
        <b-form-input v-model="projectName" placeholder="Projectnaam"></b-form-input>
        <div class="modal-buttons">
          <b-button type="submit" class="create">Aanmaken</b-button>
          <b-button class="cancel" @click="$bvModal.hide('modal-1')">Annuleren</b-button>
        </div>
      </b-form>
    </b-modal>
    <!-- Edit Modal -->
    <b-modal id="modal-2" ref="modal2">
      <h1 class="create-modal-title">Projectmap wijzigen</h1>
      <b-form v-on:submit.prevent="onEdit">
        <b-form-input v-model="editItemModal.name" placeholder="Projectnaam"></b-form-input>
        <div class="modal-buttons">
          <b-button type="submit" class="create">Wijzigen</b-button>
          <b-button class="cancel" @click="$bvModal.hide('modal-2')">Annuleren</b-button>
        </div>
      </b-form>
    </b-modal>
  </section>
</template>

<script>
import projectFolders from "@/components/projectFolders";
import FloatingActionButton from "@/components/UI/FloatingActionButton";
import Breadcrumbs from "@/components/UI/Breadcrumbs";

export default {
  name: "Company",
  data() {
    return {
      id: this.$route.params.id,
      projectName: "",
      modelStatus: false,
      modalShown: false,
      editItemModal: {}
    };
  },
  computed: {
    projects() {
      return this.$store.getters["projects/getItemByCompanyId"](+this.id);
    },
    getCompanyById() {
      return this.$store.getters["companies/getItem"](+this.id);
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("projects/addProject", {
          name: this.projectName,
          company_id: this.id,
          status: 1,
          last_updated_by: 3
        })
        .then(() => {
          let newProject = this.$store.getters["projects/getLastItem"];
          this.$refs.modal.hide();
          this.$router.push("/project/" + newProject.id);
        });
    },
    onEdit() {
      this.$store
        .dispatch("projects/editProject", this.editItemModal)
        .then(() => {
          this.$refs.modal2.hide();
        });
    },
    editItem(id) {
      this.editItemModal = this.$store.getters["projects/getItem"](id);
      console.log(this.editItemModal);
    },
    deleteItem(id) {
      this.$store.dispatch("projects/deleteProject", id);
    }
  },
  components: {
    projectFolders,
    FloatingActionButton,
    Breadcrumbs
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
      color: $dark-grey;
      margin-bottom: 25px;
      margin-top: 50px;
    }
    .breadcrumb {
      margin-top: 50px;
      font-family: OpenSans;
      font-size: 1em;
      font-weight: bold;
      color: $black;
      opacity: 0.55;
    }
    .divider {
      width: 100%;
      border-top: 1px solid $secondary;
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
    color: $dark-grey;
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