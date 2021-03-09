<template>
  <div>
    <Header />
    <router-view></router-view>

    <Footer v-if="!$route.meta.isHideFooter" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'APP',
  components:{
    Header,
    Footer,
  }
}
</script>

<style lang="less" scoped>

</style>

