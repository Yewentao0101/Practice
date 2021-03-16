import {
  reqGetCartList,
  reqAddCartList,
  reqUpdateCartList,
  // reqDeleteCartList,
} from "@/api/shopcart";

export const state = {
  cartList: [],
};

export const getters = {
  // 总价
  totalPrice(state) {
    return state.cartList.reduce((p, c) => p + (c.isChecked ? c.skuNum * c.skuPrice : 0), 0);
  },
  // 已选择商品的数量
  checkedNum(state) {
    return state.cartList.reduce((p, c) => p + (c.isChecked ? c.skuNum : 0), 0);
  },
  // 是否全选
  isCheckAll(state) {
    return !state.cartList.find((cart) => !cart.isChecked);
  },
};

export const actions = {
  getCartList({ commit }) {
    return reqGetCartList()
      .then((cartList) => {
        commit("GET_CART_LIST", cartList[0].cartInfoList);
      })
      .catch((message) => {
        console.log(message);
      });
  },
  addCartList({ commit }, { skuId, skuNum }) {
    // getCartList函数返回一个promise，默认成功promise
    // 只有函数内部报错了，会返回失败promise
    // 或者内部返回一个promise，那么整个函数返回的promise就是返回的这个promise
    return reqAddCartList(skuId, skuNum).then(() => {
      commit("ADD_CART_LIST");
    });
  },
  updateCartList({ commit }, { skuId, isChecked }) {
    reqUpdateCartList(skuId, isChecked).then(() => {
      commit("UPDATE_CART_LIST", { skuId, isChecked });
    });
  },
};

export const mutations = {
  GET_CART_LIST(state, cartList) {
    state.cartList = cartList;
  },
  ADD_CART_LIST() {},
  UPDATE_CART_LIST(state, { skuId, isChecked }) {
    const cart = state.cartList.find((cart) => cart.skuId === skuId);
    cart.isChecked = isChecked;
  },
};
