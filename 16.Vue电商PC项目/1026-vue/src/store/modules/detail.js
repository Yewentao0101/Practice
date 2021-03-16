import { reqGetGoodsDetail } from "@/api";

export const state = {
  // 建议：初始化数据时详细
  // 商品详情数据
  goodsDetail: {
    // 商品分类
    categoryView: {},
    // 商品详情数据
    skuInfo: {
      skuImageList: [],
    },
    // 商品销售属性值列表
    spuSaleAttrList: [],
  },
};

export const getters = {
  categoryView(state) {
    return state.goodsDetail.categoryView;
  },
  skuInfo(state) {
    return state.goodsDetail.skuInfo;
  },
  spuSaleAttrList(state) {
    return state.goodsDetail.spuSaleAttrList;
  },
};

export const actions = {
  getGoodsDetail({ commit }, id) {
    reqGetGoodsDetail(id)
      .then((goodsDetail) => {
        commit("GET_GOODS_DETAIL", goodsDetail);
      })
      .catch((message) => {
        console.log(message);
      });
  },
};

export const mutations = {
  GET_GOODS_DETAIL(state, goodsDetail) {
    state.goodsDetail = goodsDetail;
  },
};
