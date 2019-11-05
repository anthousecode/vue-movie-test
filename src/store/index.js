import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    favorites: [],
    alert: null,
  },
  mutations: {
    setMovies(state, payload) {
      state.movies = payload;
    },

    setAlert(state, payload) {
      state.alert = payload;
      setTimeout(() => {
        state.alert = null;
      }, 1500);
    },

    setFavorites(state, id) {
      let valid = false;
      let moviesCustom = state.movies;

      if (state.favorites.length === 0)  {
        valid = true
      } else if (!state.favorites.some(f => f.id === id)) {
        valid = true
      }

      if (valid) state.favorites.push((moviesCustom.filter(f => f.id === id))[0]);
    },

    reverseMovies(state) {
      state.movies.reverse()
    }
  },
  actions: {
    async getMovies({commit}) {
      try {
        const result = [];

        for (let i = 1; i <= 5; i++) {
          await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=edc80c8a59ff3e28731a0a0b08515afb&page=${i}`)
            .then((res) => {
              res.data.results.forEach(item => {
                result.push(item)
              });
            })
            .catch((err) => {
              console.log('err', err);
            })
        }

        commit('setMovies', result);
      } catch (err) {
        console.log('err', err);
      }
    },
  },
  getters: {
    getMovies(state) {
      return state.movies;
    },

    getFavorites(state){
      return state.favorites;
    },

    getAlert(state) {
      return state.alert;
    }
  },
})
