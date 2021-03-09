import { reqGetBaseCategoryList } from '@/api';

const state = {
  categoryList : [],
};

const getters = {};

const actions = {
  getBaseCategoryList({commit}){
    reqGetBaseCategoryList()
    .then((categoryList)=>{
      commit('GET_BASE_CATEGORY_LIST',categoryList);
    })
    .catch((error)=>{
      console.log(error)
    })
  }
};

const mutations = {
  GET_BASE_CATEGORY_LIST(state,categoryList){
    state.categoryList = categoryList
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}