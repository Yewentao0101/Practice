<template>
  <div>
    <Header />
    <!-- 显示路由组件 -->
    <router-view></router-view>

    <!-- 登录和注册不显示Footer组件 -->
    <!-- <Footer v-if="isShowFooter" /> -->
    <Footer v-if="!$route.meta.isHideFooter" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  computed: {
    isShowFooter() {
      const { path } = this.$route;
      return path !== "/login" && path !== "/register";
    },
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped>
</style>
