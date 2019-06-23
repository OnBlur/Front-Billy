import axios from "axios";

export const state = () => ({
  data: [
    {
      id: 1,
      project_id: 1,
      name: "1e Video in project id 1",
      link: "www.google.com"
    },
    {
      id: 2,
      project_id: 1,
      name: "2e Video in project id 1",
      link: "www.google.com"
    },
    {
      id: 3,
      project_id: 2,
      name: "Hallo",
      link: "www.google.com"
    },
    {
      id: 4,
      project_id: 3,
      name: "Hallo",
      link: "www.google.com"
    },
    {
      id: 5,
      project_id: 4,
      name: "Hallo",
      link: "www.google.com"
    },
    {
      id: 6,
      project_id: 5,
      name: "Hallo",
      link: "www.google.com"
    },
    {
      id: 7,
      project_id: 6,
      name: "Hallo",
      link: "www.google.com"
    },
    {
      id: 8,
      project_id: 1,
      name: "3e Video in project id 1",
      link: "www.google.com"
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
  async getAllInit(vuexContext, value) {
    return axios
      .get(process.env.baseUrl + "/get/video")
      .then(res => {
        vuexContext.commit("setData", res.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  },
  async addVideo(vuexContext, value) {
    return axios
      .post(process.env.baseUrl + "/create/video", value)
      .then(result => {
        vuexContext.commit("addData", {
          ...value,
          id: result.data.data.id
        });
      })
      .catch(e => console.log(e));
  },
  async editVideo(vuexContext, value) {
    return axios
      .post(process.env.baseUrl + "/update/video/" + value.id, value)
      .then(res => {
        vuexContext.commit("editData", res.data.data);
      })
      .catch(e => console.log(e));
  },
  async deleteVideo(vuexContext, value) {
    return axios
      .delete(process.env.baseUrl + "/delete/video/" + value)
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
    return state.data.find(item => item.id === id);
  },
  getLastItem(state) {
    return state.data.slice(-1)[0];
  },
  getItemByProjectId: state => id => {
    var result = state.data.filter(item => {
      return item.project_id === id;
    });
    return result;
  }
};
