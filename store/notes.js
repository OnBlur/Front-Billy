import axios from "axios";

export const state = () => ({
  data: [
    {
      id: 1,
      property: 0,
      timestamp: 0.35,
      content: "De testpersoon geeft een verwarde indruk"
    },
    {
      id: 2,
      property: 3,
      timestamp: 1.2,
      content:
        "“De testpersoon kijkt over het blauwe vlak heen, waardoor de tekst onder het vak ook niet gelezen wordt. ”"
    },
    {
      id: 3,
      property: 0,
      timestamp: 2.1,
      content:
        "De afbeelding in de header geeft niet het gevoel van gezond en leefstijl."
    },
    {
      id: 4,
      property: 2,
      timestamp: 2.3,
      content:
        "Raakt het overzicht kwijt van de “over ons” pagina. Weet niet waarheen te navigeren."
    },
    {
      id: 5,
      property: 0,
      timestamp: 3.1,
      content:
        "Raakt het overzicht kwijt vanaf de “over ons” pagina. Weet niet waarheen te navigeren."
    },
    {
      id: 6,
      property: 0,
      timestamp: 3.1,
      content:
        "De afbeelding in de header geeft niet het gevoel van gezond en leefstijl."
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
      .get(process.env.baseUrl + "/get/video-note/", requestOptions)
      .then(res => {
        vuexContext.commit("setData", res.data.data);
      })
      .catch(e => {
        context.error(e);
      });
  },
  async addNote(vuexContext, value) {
    return axios
      .post(process.env.baseUrl + "/create/video-note/", value)
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
      .post(
        process.env.baseUrl + "/update/video-note/" + value.id,
        requestOptions
      )
      .then(res => {
        vuexContext.commit("editData", res.data.data);
      })
      .catch(e => console.log(e));
  },
  async deleteNote(vuexContext, value) {
    return axios
      .delete(process.env.baseUrl + "/delete/video-note/" + value)
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
    return state.data.find(item => item.id === id);
  }
};
