/*
  封装请求的接口函数
*/
import request from "./request";
import mockRequest from "./mockRequest";

/**
 * 请求三级分类列表数据
 */
export const reqGetBaseCategoryList = () =>
  request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });

export const reqGetBanners = () =>
  mockRequest({
    method: "GET",
    url: "/banners",
  });

export const reqGetFloors = () =>
  mockRequest({
    method: "GET",
    url: "/floors",
  });

export const reqGetGoodsList = (data) =>
  request({
    method: "POST",
    url: "/list",
    data,
  });
