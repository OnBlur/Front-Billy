export default {
  computed: {
    propertyIcon() {
      if (this.noteProperty === 1) {
        return { iconClass: "clipboard-notes", characterClass: "s" };
      } else if (this.noteProperty === 2) {
        return { iconClass: "bulb", characterClass: "k" };
      } else if (this.noteProperty === 3) {
        return { iconClass: "quote-left", characterClass: "l" };
      } else {
        return { iconClass: null, characterClass: null };
      }
    }
  }
};
