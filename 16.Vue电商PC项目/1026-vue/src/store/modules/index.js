// 负责汇总所有的modules
import home from "./home"; // 默认暴露
import * as search from "./search"; // 分别暴露
import * as detail from "./detail"; // 分别暴露
import * as shopcart from "./shopcart"; // 分别暴露

export default {
  home,
  search,
  detail,
  shopcart,
};
