export const state = () => ({
  sidebarStatus: false
})

export const mutations = {
  setData(state, value) {
    state.sidebarStatus = value;
  }
}

export const getters = {
  getSidebarStatus(state) {
    return state.sidebar;
  }
}
