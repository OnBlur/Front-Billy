import axios from "axios";

export const state = () => ({
  data: [
    {
      id: 1,
      name: "Puur Schoonheid",
      img: "random",
      projects: "2 projecten",
      members: [
        {
          id: 1,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 2,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 3,
          url: require("~/assets/img/profile.png")
        }
      ],
      lastEdit: "twee minuten geleden",
      editBy: "Raymond"
    },
    {
      id: 2,
      name: "3 roots",
      img: "random",
      projects: "7 projecten",
      members: [
        {
          id: 1,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 2,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 3,
          url: require("~/assets/img/profile.png")
        }
      ],
      lastEdit: "een uur geleden",
      editBy: "Misha"
    },
    {
      id: 3,
      name: "A&B Meester Schilders",
      img: "random",
      projects: "3 projecten",
      members: [
        {
          id: 1,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 2,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 3,
          url: require("~/assets/img/profile.png")
        }
      ],
      lastEdit: "gisteren",
      editBy: "Renze"
    },
    {
      id: 4,
      name: " Google",
      img: "random",
      projects: "4 projecten",
      members: [
        {
          id: 1,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 2,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 3,
          url: require("~/assets/img/profile.png")
        }
      ],
      lastEdit: "eergisteren",
      editBy: "Yan"
    },
    {
      id: 5,
      name: " Microsoft",
      img: "random",
      projects: "1 project",
      members: [
        {
          id: 1,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 2,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 3,
          url: require("~/assets/img/profile.png")
        }
      ],
      lastEdit: "gisteren",
      editBy: "Ruurd"
    },
    {
      id: 6,
      name: " Apple",
      img: "random",
      projects: "2 projecten",
      members: [
        {
          id: 1,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 2,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 3,
          url: require("~/assets/img/profile.png")
        }
      ],
      lastEdit: "een week geleden",
      editBy: "Renze"
    },
    {
      id: 7,
      name: " Toshiba",
      img: "random",
      projects: "876 projecten",
      members: [
        {
          id: 1,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 2,
          url: require("~/assets/img/profile.png")
        },
        {
          id: 3,
          url: require("~/assets/img/profile.png")
        }
      ],
      lastEdit: "een jaar geleden",
      editBy: "Misha"
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
      .get(process.env.baseUrl + "/get/company", requestOptions)
      .then(res => {
        vuexContext.commit("setData", res.data.data);
      })
      .catch(e => {
        e => console.log(e);
      });
  },
  async addCompany(vuexContext, value) {
    return axios
      .post(process.env.baseUrl + "/create/company", value)
      .then(result => {
        vuexContext.commit("addData", {
          ...value,
          id: result.data.data.id
        });
      })
      .catch(e => console.log(e));
  },
  async editCompany(vuexContext, value) {
    return axios
      .post(process.env.baseUrl + "/update/company/" + value.id, value)
      .then(res => {
        vuexContext.commit("editData", res.data.data);
      })
      .catch(e => console.log(e));
  },
  async deleteCompany(vuexContext, value) {
    return axios
      .delete(process.env.baseUrl + "/delete/company/" + value)
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
  }
};
