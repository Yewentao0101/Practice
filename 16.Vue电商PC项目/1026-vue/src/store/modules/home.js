import { reqGetBaseCategoryList, reqGetBanners, reqGetFloors } from "@/api";

const state = {
  categoryList: [],
  banners: [],
  floors: [],
};

const getters = {};

const actions = {
  getBaseCategoryList({ commit }) {
    // 发送请求，获取数据
    reqGetBaseCategoryList()
      .then((categoryList) => {
        commit("GET_BASE_CATEGORY_LIST", categoryList);
      })
      .catch((message) => {
        console.log(message);
      });
  },
  getBanners({ commit }) {
    // 发送请求，获取数据
    reqGetBanners()
      .then((banners) => {
        commit("GET_BANNERS", banners);
      })
      .catch((message) => {
        console.log(message);
      });
  },
  getFloors({ commit }) {
    // 发送请求，获取数据
    reqGetFloors()
      .then((floors) => {
        commit("GET_FLOORS", floors);
      })
      .catch((message) => {
        console.log(message);
      });
  },
};

const mutations = {
  GET_BASE_CATEGORY_LIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GET_BANNERS(state, banners) {
    state.banners = banners;
  },
  GET_FLOORS(state, floors) {
    state.floors = floors;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
