export const state = () => ({
  notes: [{
      timestamp: 3,
      note: "Hier gaat iets verkeerd"
    },
    {
      timestamp: 13,
      note: "Hallo?"
    }
  ]
});

export const mutations = {
  setNote(state, value) {
    state.notes = value;
  },
  addNote(state, value) {
    state.notes.push(value);
  },
  editNote(state, value) {
    const userIndex = state.notes.findIndex(item => item.id === value.id);
    state.notes[userIndex] = value;
  },
  deleteNote(state, value) {
    state.notes.splice(value, 1);
    // state.notes = state.notes.filter(
    //   item => item.id !== value
    // );
    console.log("removed note", value);
  }
};

export const getters = {
  allNotes(state) {
    return state.notes;
  },
  getNote: state => id => {
    return state.notes.find(item => item.id === id);
  }
};
