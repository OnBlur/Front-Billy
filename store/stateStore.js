export const state = () => ({
  sidebarStatus: false
});

export const mutations = {
  setSidebarStatus(state, value) {
    state.sidebarStatus = value;
  }
};

export const getters = {
  getSidebarStatus(state) {
    return state.sidebarStatus;
  }
};
