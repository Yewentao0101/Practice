// 负责汇总所有的modules
import home from "./home"; // 默认暴露
import * as search from "./search"; // 分别暴露

export default {
  home,
  search,
};
