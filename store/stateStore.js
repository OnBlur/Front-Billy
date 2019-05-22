export const state = () => ({
  sidebarElement: false
})

export const mutations = {
  setData(state, value) {
    state.sidebarElement = value;
  }
}

export const getters = {
  getSidebarStatus(state) {
    return state.sidebar;
  }
}
