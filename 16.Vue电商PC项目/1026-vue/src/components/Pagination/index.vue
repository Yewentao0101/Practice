<template>
  <div class="pagination">
    <button @click="myCurrentPage--"
    :disabled="myCurrentPage === 1"
    :class="{ disabled: myCurrentPage === 1 }">
    <span class="iconfont icon-arrow-left-bold"></span></button>
    <button @click="myCurrentPage = 1"
    :class="{ active: myCurrentPage === 1 }">1</button>
    <button v-if="startEnd.start >= 3">
      <span class="iconfont icon-elipsis"></span>
    </button>
    <button
    :class="{ active: myCurrentPage === num + startEnd.start - 1 }"
    v-for="num in middleBtnCount" :key="num"
    @click="myCurrentPage = num + startEnd.start - 1">
      {{ num + startEnd.start - 1 }}
    </button>
    <button v-if="startEnd.end <= totalPage - 2">
      <span class="iconfont icon-elipsis"></span>
    </button>
    <button
    @click="myCurrentPage = totalPage"
    v-if="totalPage > 1"
    :class="{ active: myCurrentPage === totalPage }">
    {{ totalPage }}
    </button>
    <button
      @click="myCurrentPage++"
      :disabled="myCurrentPage === totalPage"
      :class="{ disabled: myCurrentPage === totalPage }">
      <span class="iconfont icon-arrow-right-bold"></span>
    </button>
    <select class="pagination-select" v-model="myPageSize">
      <option v-for="size in pageSizes"
      :key="size" :value="size">
      {{ size }} 条 / 页</option>
    </select>
    <span class="pagination-total">共 {{ total }} 条</span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    "current-page": {
      type: Number,
      defalut: 1,
    },
    "page-size": {
      type: Number,
      defalut: 5,
    },
    "page-sizes": {
      type: Array,
      defalut: () => [5, 10, 15, 20],
    },
    total: {
      type: Number,
      defalut: 0,
    },
    "pager-count": {
      type: Number,
      defalut: 7,
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
    },
  },
  data() {
    return {
      myCurrentPage: this.currentPage,
      myPageSize: this.pageSize,
    };
  },
  computed: {
    middleBtnCount() {
      const num = this.startEnd.end - this.startEnd.start + 1;
      return num < 0 ? 0 : num;
    },
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd() {
      const { pagerCount, myCurrentPage, totalPage } = this;
      if (totalPage <= pagerCount) {
        const start = 2;
        const end = totalPage - 1;
        return {
          start,
          end,
        };
      }
      const middleBtnCount = pagerCount - 2;
      const halfMiddleBtnCount = Math.ceil(middleBtnCount / 2);
      let start = myCurrentPage - halfMiddleBtnCount;
      if (start < 2) {
        start = 2;
      }
      let end = start + middleBtnCount - 1;
      if (end >= totalPage) {
        end = totalPage - 1;
        start = end - middleBtnCount + 1;
      }
      return {
        start,
        end,
      };
    },
  },
  watch: {
    myCurrentPage(currentPage) {
      this.$emit("current-change", currentPage);
    },
    myPageSize(pageSize) {
      const { myCurrentPage, totalPage } = this;
      if (myCurrentPage > totalPage) {
        this.myCurrentPage = totalPage;
      }

      this.$emit("size-change", pageSize);
    },
  },
};
</script>

<style lang="less" scoped>
.disabled {
  // background-color: rgba(244, 244, 245, 0.5);
  cursor: not-allowed;
  color: #c0c4cc;
}

.pagination {
  display: flex;
  align-items: center;
}
.pagination-total {
  font-size: 13px;
  margin-left: 10px;
  font-weight: 400;
  color: #606266;
}
button {
  margin: 0 5px;
  background-color: #f4f4f5;
  color: #606266;
  min-width: 30px;
  border-radius: 2px;
  outline: none;
  border: none;
  padding: 0 4px;
  display: inline-block;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
}
.active {
  background-color: #409eff;
  color: #fff;
}
.pagination-select {
  padding: 5px 5px;
  border: 1px solid #dcdfe6;
  color: #606266;
  outline: none;
  border-radius: 5px;
}
</style>
