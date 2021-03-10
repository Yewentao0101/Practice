import Vue from "vue";
import Vuex from "vuex";

import modules from "./modules";
// import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  getters: {
    trademarkList(state) {
      return state.search.searchList.trademarkList;
    },
    attrsList(state) {
      return state.search.searchList.attrsList;
    },
    goodsList(state) {
      return state.search.searchList.goodsList;
    },
  },
});

/*
  // 定义modules
  modules: {
    home: {
      state: {},
      getters: {},
      actions: {},
      mutations: {}
    },
    login: { ... }
  }

  // vuex管理的状态数据结构：
  {
    home: {
      categoryList: []
    },
    login: { ... }
  }
*/
