<template>
  <div>
    <nav class="fab">
      <b-button
        href="#"
        class="buttons folder-add"
        tooltip="Projectmap aanmaken"
        v-b-modal.modal-1
      >d</b-button>
    </nav>
    <div>
      <b-modal id="modal-1" ref="modal">
        <h1 class="create-modal-title">Bedrijfsmap aanmaken</h1>
        <b-form v-on:submit.prevent="onSubmit">
          <b-form-input v-model="companyName" placeholder="Bedrijfsnaam"></b-form-input>
          <div class="modal-buttons">
            <b-button type="submit" class="create">Aanmaken</b-button>
            <b-button class="cancel">Annuleren</b-button>
          </div>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCompanyFolder",
  data() {
    return {
      companyName: "",
      modelStatus: false,
      modalShown: false
    };
  },
  methods: {
    onSubmit() {
      console.log("hallo?");
      this.$store
        .dispatch("companies/addCompany", {
          name: this.companyName
        })
        .then(res => {
          let newCompany = this.$store.getters["companies/getLastItem"];
          this.$router.push("/company/" + newCompany.id);
          this.$refs.modal.hide();
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.fab {
  bottom: 0;
  position: fixed;
  margin: 1.5em;
  right: 0px;
}

.buttons {
  box-shadow: 0px 5px 11px -2px rgba(0, 0, 0, 0.18),
    0px 4px 12px -7px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  display: block;
  width: 65px;
  height: 65px;
  margin: 20px auto 0;
  position: relative;
  transition: all 0.1s ease-out;
}

.buttons {
  font-family: "icons";

  transition-delay: 25ms;
  background-color: #424242;
  background-size: contain;
}

.folder-add {
  color: #ffffff;
  text-align: center;
  padding-top: 10px;
  font-size: 2em;

  &:hover {
    text-decoration: none;
  }
}

[tooltip] {
  &:before {
    bottom: 25%;
    font-family: arial;
    font-weight: 600;
    border-radius: 2px;
    background-color: #424242;
    color: #ffffff;
    content: attr(tooltip);
    font-size: 12px;
    visibility: hidden;
    opacity: 0;
    padding: 1px 20px;
    margin-right: 12px;
    position: absolute;
    right: 100%;
    white-space: nowrap;
  }
  &:hover {
    &:before,
    &:after {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
