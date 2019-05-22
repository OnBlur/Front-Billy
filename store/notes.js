import axios from "axios";

export const state = () => ({
  data: []
})

export const mutations = {
  setData(state, value) {
    state.data = value;
  }
}

export const actions = {
  getAllInit(vuexContext, context) {
    const requestOptions = {
      method: "GET",
      //   headers: authHeader()
    };
    return axios
      .get(process.env.baseUrl + "/get-all-video-notes", requestOptions)
      .then(res => {
        vuexContext.commit("setData", res.data.data);
      })
      .catch(e => {
        // console.log("nothing found")
        context.error(e);
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
