import request from './request'

export const reqGetBaseCategoryList = () =>request({
  method:'GET',
  url:'/product/getBaseCategoryList',
})