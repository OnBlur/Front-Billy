export const state = () => ({
  sidebarStatus: false,

  alertMessageStatus: false,
  currentVersion: 0.4,
  latestVersion: 0.5
});

export const mutations = {
  setSidebarStatus(state, value) {
    state.sidebarStatus = value;
  },
  setAlertMessageStatus(state, value) {
    state.sidebarStatus = value;
  }
};

export const getters = {
  getSidebarStatus(state) {
    return state.sidebarStatus;
  },
  getAlertMessageStatus(state) {
    return state.sidebarStatus;
  },
  getCurrentVersion(state) {
    return state.currentVersion;
  },
  getLatestVersion(state) {
    return state.latestVersion;
  }
};
