import request from "./request";
const PREFIX_URL = "/cart";

export const reqGetCartList = () => {
  request({
    method: "GET",
    url: `${PREFIX_URL}/cartList`,
  });
};

export const reqAddCartList = (skuId, skuNum) => {
  request({
    method: "POST",
    url: `${PREFIX_URL}/addToCart/${skuId}/${skuNum}`,
  });
};

export const reqUpdateCartList = (skuId, isChecked) => {
  request({
    method: "GET",
    url: `${PREFIX_URL}/checkCart/${skuId}/${isChecked}`,
  });
};

export const reqDeleteCartList = (skuId) => {
  request({
    method: "DELETE",
    url: `${PREFIX_URL}/deleteCart/${skuId}`,
  });
};
