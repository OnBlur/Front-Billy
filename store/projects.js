import axios from "axios";

export const state = () => ({
  data: [
    {
      id: 1,
      company_id: 1,
      name: "Een"
    },
    {
      id: 2,
      company_id: 1,
      name: "Haooi"
    },
    {
      id: 3,
      company_id: 2,
      name: "Drie"
    },
    {
      id: 4,
      company_id: 3,
      name: "Vier"
    },
    {
      id: 5,
      company_id: 4,
      name: "Vijf"
    }
  ]
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
      })
      .catch(e => {
        console.log(e);
      });
  },
  async addProject(vuexContext, value) {
    return axios
      .post(process.env.baseUrl + "/create/project", value)
      .then(result => {
        vuexContext.commit("addData", {
          ...value,
          id: result.data.data.id
        });
      })
      .catch(e => console.log(e));
  },
  async editNote(vuexContext, value) {
    const requestOptions = {
      // method: "PATCH",
      project_id: value.project_id,
      name: value.name,
      link: value.link
    };
    return axios
      .post(process.env.baseUrl + "/update/project" + value.id, requestOptions)
      .then(res => {
        vuexContext.commit("editData", res.data.data);
      })
      .catch(e => console.log(e));
  },
  async deleteNote(vuexContext, value) {
    return axios
      .delete(process.env.baseUrl + "/delete/project" + value)
      .then(() => {
        vuexContext.commit("deleteData", value);
      })
      .catch(e => console.log(e));
  }
};

export const getters = {
  allData(state) {
    return state.data;
  },
  getItem: state => id => {
    return state.data.filter(item => item.id === id);
  },
  getLastItem(state) {
    return state.data.slice(-1)[0];
  },
  getItemByCompanyId: state => id => {
    var result = state.data.filter(item => {
      return item.company_id === id;
    });
    return result;
  }
};
