import axios from "axios";

export const state = () => ({
  data: []
})

export const mutations = {
  setNote(state, value) {
    state.data = value;
  }
}

export const actions = {
  test(vuexContext, context) {
    return axios
      .get(process.env.baseUrl + "/roles")
      .then(res => {
        vuexContext.commit("setNote", res.data);
      })
      .catch(e => {
        console.log("nothing found")
        // context.error(e);
      });
  }
}

export const getters = {
  allData(state) {
    return state.data;
  },
  getNote: state => id => {
    return state.data.find(item => item.id === id);
  }
}
