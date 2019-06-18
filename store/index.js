import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";

export const plugins = [
  createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 3, secure: true }),
      removeItem: key => Cookies.remove(key)
    }
  })
];

export const state = () => ({
  // counter: 0
});

export const mutations = {
  // increment(state) {
  //   state.counter++
  // }
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    // await dispatch("videos/getAllInit");
    // await dispatch("notes/getAllInit");
    // await dispatch("todos/getAllInit");
  }
};

export const strict = false;
