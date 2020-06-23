import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const apiUrl = process.env.VUE_APP_API_URL;

export default new Vuex.Store({
  state: {
    devices: []
  },
  mutations: {
    setDevices (state, payload) {
      Vue.set(state, "devices", payload)
    }
  },
  actions: {
    getDevices({commit}) {
      axios.get(`${apiUrl}api/ReadDevices`).then(
        (response) => {
          console.log(response.data)
          commit('setDevices', response.data)
        }
      )
    },
    createDevice({commit}, payload) {
      axios.post(`${apiUrl}api/CreateDevice`, payload).then(
      )
    }
  },
  modules: {
  }
})
