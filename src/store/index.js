import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    Resume: [],
    Project:[],
    Testimonials: [],
    },
  getters: {
  },
  mutations: {
    Testimonials(state, data) {
      state.Testimonials = data ;
    }
  },
  actions: {
    fetchTestData({ commit }) {
      axios.get()
      .then(response => {
        commit('',response.data);
      })
      .catch(error => {
        console.error('Error fetching data:',error)
      });
    }
  },
  modules: {
  }
})
