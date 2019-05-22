import axios from "axios";

export const state = () => ({
  data: [],
  sidebar: false,
  sidebarElement: null
})

export const mutations = {
  setData(state, value) {
    state.sidebarElement = value;
  }
}

export const actions = {
 
}

export const getters = {
  allData(state) {
    return state.data;
  },
  getNote: state => id => {
    return state.data.find(item => item.id === id);
  }
}
