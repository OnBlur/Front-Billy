import axios from "axios";
import Cookies from "js-cookie";

export const state = () => ({
  data: [
    // {
    //   id: 1,
    //   type: 2,
    //   video_id: 1,
    //   timestamp: "0.35",
    //   content: "De testpersoon geeft een verwarde indruk"
    // },
    // {
    //   id: 2,
    //   type: 2,
    //   video_id: 1,
    //   timestamp: "1.2",
    //   content:
    //     "“De testpersoon kijkt over het blauwe vlak heen, waardoor de tekst onder het vak ook niet gelezen wordt. ”"
    // },
    // {
    //   id: 3,
    //   type: 1,
    //   video_id: 1,
    //   timestamp: "2.1",
    //   content:
    //     "De afbeelding in de header geeft niet het gevoel van gezond en leefstijl."
    // },
    // {
    //   id: 4,
    //   type: 2,
    //   video_id: 1,
    //   timestamp: "2.3",
    //   content:
    //     "Raakt het overzicht kwijt van de “over ons” pagina. Weet niet waarheen te navigeren."
    // },
    // {
    //   id: 5,
    //   type: 0,
    //   video_id: 1,
    //   timestamp: "3.1",
    //   content:
    //     "Raakt het overzicht kwijt vanaf de “over ons” pagina. Weet niet waarheen te navigeren."
    // },
    // {
    //   id: 6,
    //   type: 0,
    //   video_id: 1,
    //   timestamp: "3.1",
    //   content:
    //     "De afbeelding in de header geeft niet het gevoel van gezond en leefstijl."
    // }
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
    console.log(value, "mutation");
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
      .get(process.env.baseUrl + "/get/video-note", requestOptions)
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
      video_id: 1,
      ...value
    };
    console.log(requestOptions);
    return axios
      .post(
        process.env.baseUrl + "/update/video-note/" + value.id,
        requestOptions
      )
      .then(res => {
        console.log(res.data.data);
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
  getNotes(state) {
    var result = state.data.filter(obj => {
      return obj.type === 0;
    });
    return result;
  },
  getFindings(state) {
    var result = state.data.filter(obj => {
      return obj.type === 1;
    });
    return result;
  },
  getQuotes(state) {
    var result = state.data.filter(obj => {
      return obj.type === 2;
    });
    return result;
  },
  getItem: state => id => {
    return state.data.find(item => item.id === id);
  }
};
