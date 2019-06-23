<template>
  <section class="wrapper">
    <Breadcrumbs :companyId="+getProjectById.company_id" :projectName="getProjectById.name"/>
    <div class="row">
      <div class="folder">
        <div class="filters">
          <div></div>
          <div>Name</div>
          <div>Status</div>
          <div></div>
          <div>Last edit</div>
        </div>
        <videoFolders
          v-for="item in videos"
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
    <FloatingActionButton toolTip="Start een test" iconClass="times" iconLetter="f"/>
    <!-- Create Modal -->
    <b-modal id="modal-1" ref="modal">
      <h1 class="create-modal-title">Start een test</h1>
      <b-form v-on:submit.prevent="onSubmit">
        <b-form-input v-model="testName" placeholder="Naam test"></b-form-input>
        <b-col class="form-row-2">
          <b-form-input v-model="testPersonName" placeholder="Naam testpersoon" class="testperson"></b-form-input>
          <b-form-input v-model="testPersonAge" placeholder="Leeftijd testpersoon"></b-form-input>
        </b-col>
        <!-- <b-col class="form-row-2">
          <div class="tags-wrapper-modal">
            <Tag v-for="item in tags" :key="item.id" :title="item.title"/>
          </div>
          <b-form-input v-model="testTag" placeholder="Tag toevoegen"></b-form-input>
        </b-col>-->
        <div class="modal-buttons">
          <b-button type="submit" class="create">Aanmaken</b-button>
          <b-button class="cancel" @click="$bvModal.hide('modal-1')">Annuleren</b-button>
        </div>
      </b-form>
    </b-modal>
    <!-- Edit Modal -->
    <b-modal id="modal-2" ref="modal2">
      <h1 class="create-modal-title">Start een test</h1>
      <b-form v-on:submit.prevent="onEdit">
        <b-form-input v-model="editItemModal.name" placeholder="Naam test"></b-form-input>
        <b-col class="form-row-2">
          <b-form-input
            v-model="editItemModal.test_person"
            placeholder="Naam testpersoon"
            class="testperson"
          ></b-form-input>
          <b-form-input v-model="editItemModal.link" placeholder="Leeftijd testpersoon"></b-form-input>
        </b-col>
        <!-- <b-col class="form-row-2">
          <div class="tags-wrapper-modal">
            <Tag v-for="item in tags" :key="item.id" :title="item.title"/>
          </div>
          <b-form-input v-model="testTag" placeholder="Tag toevoegen"></b-form-input>
        </b-col>-->
        <div class="modal-buttons">
          <b-button type="submit" class="create">Wijzigen</b-button>
          <b-button class="cancel" @click="$bvModal.hide('modal-2')">Annuleren</b-button>
        </div>
      </b-form>
    </b-modal>
  </section>
</template>

<script>
import videoFolders from "@/components/videoFolders";
import FloatingActionButton from "@/components/UI/FloatingActionButton";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import Tag from "@/components/Playback/Tag";

export default {
  name: "Project",
  data() {
    return {
      id: this.$route.params.id,
      testName: "",
      testPersonName: "",
      testPersonAge: "",
      testTag: "",
      editItemModal: [],

      tags: [{ id: 1, title: "MCL" }, { id: 2, title: "Revalidatie" }]
    };
  },
  computed: {
    videos() {
      return this.$store.getters["videos/getItemByProjectId"](+this.id);
    },
    getProjectById() {
      return this.$store.getters["projects/getItem"](+this.id);
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("videos/addVideo", {
          name: this.testName,
          project_id: this.id,
          name: this.testName,
          link: "www.google.nl",
          test_person: this.testPersonName
        })
        .then(res => {
          let newVideo = this.$store.getters["videos/getLastItem"];
          this.$refs.modal.hide();
          this.$router.push("/live/" + newVideo.id);
        });
    },
    onEdit() {
      this.$store.dispatch("videos/editVideo", this.editItemModal).then(() => {
        this.$refs.modal2.hide();
      });
    },
    editItem(id) {
      this.editItemModal = this.$store.getters["videos/getItem"](id);
    },
    deleteItem(id) {
      this.$store.dispatch("videos/deleteVideo", id);
    }
  },
  components: {
    videoFolders,
    FloatingActionButton,
    Tag,
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

.form-row-2 {
  padding: 0px;
}

.testperson {
  margin-right: 15px;
}

.col {
  display: flex;
  justify-content: space-between;
}
</style>
