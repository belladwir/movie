// import { createStore } from "vuex";
import axios from "axios";
import Vuex from "vuex";
// import Vue from "vue";

//load Vuex
// Vue.use(Vuex);

//to handle state
const state = {
  movies: [],
};

//to handle state
const getters = {};

//to handle actions
const actions = {
  getMovies({ commit }) {
    axios
      .get("https://www.omdbapi.com/?apikey=715289b&s=Batman&page=1")
      .then((response) => {
        commit("SET_MOVIES", response.data["Search"]);
      });
  },
};

//to handle mutations
const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies;
  },
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
