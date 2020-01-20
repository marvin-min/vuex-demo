import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: { count: 0 },
  mutations: {
    inc(state, payload) {
      state.count += payload.number;
    },
    desc(state) {
      state.count--;
    }
  },
  actions: {
    addAction({ commit, dispatch }) {
      setTimeout(function() {
        commit("inc", { number: 200 }); //直接可以获取到commit方法，不用是context.commit
        dispatch("textAction", { test: "测试" });
      }, 0);
    },
    textAction(context, obj) {
      console.log(obj);
    }
  },
  modules: {}
});
export default store;
