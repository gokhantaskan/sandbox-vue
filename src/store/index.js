import Vue from "vue";
import Vuex from "vuex";
import { moduleUsers } from "./moduleUsers";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    moduleUsers
  }
});
