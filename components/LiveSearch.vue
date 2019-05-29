<template>
  <div class="wrapper-container">
      <div class="md-field">
        <input type="text" v-model="searchWord" class="search-box md-input" placeholder="Zoeken" list="insights">
          <datalist id="insights">
            <option v-for="(item, index) in filteredItems" :key="index" v-text="item.name"></option>
            <option v-if="countFilteredItems == 0" >Er zijn geen resultaten gevonden.</option> 
          </datalist>
      </div>

    <main>
      <div class="insights-overview">
        <div v-for="(item, index) in filteredItems" :key="index" class="insigts-item">
          <label class="insigths-item-name" v-text="item.name"></label>
        </div>
        <label
          v-if="countFilteredItems == 0"
          class="insigths-not-found"
        >Er zijn geen resultaten gevonden.</label>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "LiveSearch",
  data() {
    return {
      searchWord: "",
      insightsItems: [
        {
          name: "De gebruiker ziet de aanmeld knop niet"
        },
        {
          name: "Er wordt geen aandacht besteed aan de afbeelding links"
        }
      ]
    };
  },
  computed: {
    filteredItems() {
      return this.insightsItems.filter(item => {
        return item.name
          .toLowerCase()
          .includes(this.searchWord.trim().toLowerCase());
      });
    },
    countFilteredItems() {
      return this.filteredItems.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-container {
  display: flex;
  flex-direction: column;
  text-align: center;

  .insights-overview {
    margin-top: 2em;
  }
}
</style>
