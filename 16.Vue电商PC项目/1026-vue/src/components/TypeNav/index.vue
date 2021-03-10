<template>
  <!-- 商品分类导航 -->
  <div class="type-nav" @mouseleave="isSearchShow = false">
    <div class="container">
      <h2 class="all" @mouseenter="isSearchShow = true">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort" v-if="isHomeShow || isSearchShow">
        <div class="all-sort-list2" @click="toSearch">
          <div class="item bo" v-for="c1 in categoryList" :key="c1.categoryId">
            <h3>
              <!--
                1. 使用路由链接跳转
                  问题：生成的router-link太多了
                2. 使用编程式导航
                  问题：click事件绑定太多了
                3. 使用事件委托来优化
               -->
              <!-- <router-link
                :to="{
                  name: 'Search', // 跳转到哪个命名路由
                  query: {
                    categoryName: c1.categoryName,
                    category1Id: c1.categoryId,
                  },
                }"
                >{{ c1.categoryName }}</router-link
              > -->
              <!-- <a
                @click.prevent="
                  toSearch(c1.categoryName, c1.categoryId, 'category1Id')
                "
                >{{ c1.categoryName }}</a
              > -->

              <a
                :data-categoryName="c1.categoryName"
                :data-categoryId="c1.categoryId"
                data-level="category1Id"
                >{{ c1.categoryName }}</a
              >
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl
                  class="fore"
                  v-for="c2 in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dt>
                    <!-- <router-link
                      :to="{
                        name: 'Search', // 跳转到哪个命名路由
                        query: {
                          categoryName: c2.categoryName,
                          category2Id: c2.categoryId,
                        },
                      }"
                      >{{ c2.categoryName }}</router-link
                    > -->

                    <!-- <a
                      @click.prevent="
                        toSearch(c2.categoryName, c2.categoryId, 'category2Id')
                      "
                      >{{ c2.categoryName }}</a
                    > -->

                    <a
                      :data-categoryName="c2.categoryName"
                      :data-categoryId="c2.categoryId"
                      data-level="category2Id"
                      >{{ c2.categoryName }}</a
                    >
                  </dt>
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <!-- <router-link
                        :to="{
                          name: 'Search', // 跳转到哪个命名路由
                          query: {
                            categoryName: c3.categoryName,
                            category3Id: c3.categoryId,
                          },
                        }"
                        >{{ c3.categoryName }}</router-link
                      > -->

                      <!-- <a
                        @click.prevent="
                          toSearch(
                            c3.categoryName,
                            c3.categoryId,
                            'category3Id',
                          )
                        "
                        >{{ c3.categoryName }}</a
                      > -->

                      <a
                        :data-categoryName="c3.categoryName"
                        :data-categoryId="c3.categoryId"
                        data-level="category3Id"
                        >{{ c3.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TypeNav",
  data() {
    return {
      // categoryList: [],
      isSearchShow: false,
      isHomeShow: this.$route.path === "/",
    };
  },
  computed: {
    // ...mapState(["categoryList"]), // 之前的做法，现在不行了
    // ...mapState(["home"]), // 可以用，但是太麻烦
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    ...mapActions(["getBaseCategoryList"]), // 可以
    // toSearch(categoryName, categoryId, level) {
    //   this.$router.history.push({
    //     name: "Search",
    //     query: {
    //       categoryName,
    //       [level]: categoryId,
    //     },
    //   });
    // },
    toSearch(event) {
      // console.log(event.target.dataset);
      const { categoryname, categoryid, level } = event.target.dataset;

      if (!level) return;

      this.$router.history.push({
        name: "Search",
        query: {
          categoryName: categoryname,
          [level]: categoryid,
        },
      });
    },
  },
  mounted() {
    this.getBaseCategoryList();
  },
};
</script>

<style  lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            background-color: yellowgreen;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
