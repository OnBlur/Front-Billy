import axios from "axios";

export const state = () => ({
  data: []
});

export const mutations = {
  setData(state, value) {
    state.data = value;
  },
  addData(state, value) {
    state.data.push(value);
  },
  editData(state, value) {
    const index = state.data.findIndex(item => item.id === value.id);
    state.data[index] = value;
  },
  deleteData(state, value) {
    state.data = state.data.filter(item => item.id !== value);
  }
};

export const actions = {
  async getAllInit(vuexContext, context) {
    const requestOptions = {
      method: "GET"
      //   headers: authHeader()
    };
    return axios
      .get(process.env.baseUrl + "/get/project", requestOptions)
      .then(res => {
        vuexContext.commit("setData", res.data.data);
        // Cookies.set("notes", res.data.data);
        // localStorage.setItem("notes", res.data.data);
      })
      .catch(e => {
        context.error(e);
      });
  },
  async addNote(vuexContext, value) {
    return axios
      .post(process.env.baseUrl + "/create/project/", value)
      .then(result => {
        vuexContext.commit("addData", {
          ...value,
          id: result.data.data.id
        });
      })
      .catch(e => console.log(e.response.data.message));
  },
  async editNote(vuexContext, value) {
    const requestOptions = {
      // method: "PATCH",
      project_id: value.project_id,
      name: value.name,
      link: value.link
    };
    return axios
      .post(process.env.baseUrl + "/update/project/" + value.id, requestOptions)
      .then(res => {
        vuexContext.commit("editData", res.data.data);
      })
      .catch(e => console.log(e.response.data.message));
  },
  async deleteNote(vuexContext, value) {
    return axios
      .delete(process.env.baseUrl + "/delete/project/" + value)
      .then(() => {
        vuexContext.commit("deleteData", value);
      })
      .catch(e => alert(e.response.data.message));
  }
};

export const getters = {
  allData(state) {
    return state.data;
  },
  getItem: state => id => {
    return state.data.filter(item => item.id === id);
  },
  getItemByCompanyId: state => id => {
    var result = state.data.filter(item => {
      return item.company_id === id;
    });
    return result;
  }
};
