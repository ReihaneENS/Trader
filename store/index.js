/*import Vue from 'vue';
import Vuex from 'vuex';
//Modules
import membershipList from "~/store/modules/membershipList";

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    membershipList,
  }
})*/
export const state = () => ({
  counter: 0
})

export const getters = {
  getCounter(state) {
    return state.counter
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
}
