import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    SET_COUNTER(state, value) {
      state.counter = value;
    },
  },
  actions: {},
  getters: {},
});

export default store;
