<template>
  <!-- Swiper -->
  <div
    class="swiper-container"
    ref="swiper"
    @mouseenter="swiper.autoplay.stop()"
    @mouseleave="swiper.autoplay.start()"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="image in carouselList" :key="image.id">
        <img :src="image.imgUrl" :alt="image.title" />
      </div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// npm i swiper@5
// 引入Swiper js和css
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "Carousel",
  props: ["carouselList"],
  watch: {
    carouselList: {
      handler(newVal) {
        if (!newVal.length) return; // 为了banners第一次没有数据，不new
        // nextTick方法：等待DOM更新完成才触发
        this.$nextTick(() => {
          /* eslint-disable-next-line */
          this.swiper = new Swiper(this.$refs.swiper, {
            cssMode: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
            },
            loop: true, // 无缝轮播
            autoplay: {
              delay: 1000, // 自动轮播的时间
              // stopOnLastSlide: false, // 最后一张不停止自动轮播
              // disableOnInteraction: true, // 鼠标移入时停止自动轮播
            },
          });
        });
      },
      immediate: true,
    },

    // carouselList() {
    //   /*
    //     先等数据回来，在new Swiper
    //     vue的更新是异步的
    //       也就是说数据回来了，但是DOM元素并没有创建
    //     还需要等DOM元素创建好，才能new Swiper

    //     总结：new Swiper一定要等内部的DOM元素加载完成才行

    //     watch:
    //       监视属性第一次时不会触发，后面发生修改才会触发
    //   */
    //   // nextTick方法：等待DOM更新完成才触发
    //   this.$nextTick(() => {
    //     /* eslint-disable-next-line */
    //     this.swiper = new Swiper(this.$refs.swiper, {
    //       cssMode: true,
    //       navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //       },
    //       pagination: {
    //         el: ".swiper-pagination",
    //       },
    //       loop: true, // 无缝轮播
    //       autoplay: {
    //         delay: 1000, // 自动轮播的时间
    //         // stopOnLastSlide: false, // 最后一张不停止自动轮播
    //         // disableOnInteraction: true, // 鼠标移入时停止自动轮播
    //       },
    //     });
    //   });
    // },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
}
</style>
