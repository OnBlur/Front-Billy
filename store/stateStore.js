import axios from "axios";

export const state = () => ({
  sidebarStatus: false,

  alertMessageStatus: false,
  currentVersion: 0.4,
  latestVersion: null
});

export const mutations = {
  setSidebarStatus(state, value) {
    state.sidebarStatus = value;
  },
  setAlertMessageStatus(state, value) {
    state.alertMessageStatus = value;
  },
  setLatesVersion(state, value) {
    state.latestVersion = +value;
  }
};

export const actions = {
  async getVersion(vuexContext, context) {
    return axios
      .get(process.env.baseUrl + "/get-version")
      .then(res => {
        vuexContext.commit("setLatesVersion", res.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};

export const getters = {
  getSidebarStatus(state) {
    return state.sidebarStatus;
  },
  getAlertMessageStatus(state) {
    return state.alertMessageStatus;
  },
  getCurrentVersion(state) {
    return state.currentVersion;
  },
  getLatestVersion(state) {
    return state.latestVersion;
  }
};
