<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(image, index) in skuImageList"
        :key="image.id"
      >
        <img
          :src="image.imgUrl"
          :alt="image.imgName"
          :class="{ active: currentIndex === index }"
          @click="setCurrentIndex(index)"
        />
      </div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "ImageList",
  props: ["skuImageList"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  watch: {
    skuImageList: {
      handler() {
        this.setCurrentIndex(0);

        this.$nextTick(() => {
          /* eslint-disable-next-line */
          this.swiper = new Swiper(this.$refs.swiper, {
            // 解决点到最后一页，按钮还是高亮问题
            // cssMode: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            slidesPerView: 5, // 每页显示图片数量
            slidesPerGroup: 5, // 每次轮播滑动的图片数量
          });
        });
      },
    },
  },
  methods: {
    setCurrentIndex(index) {
      this.currentIndex = index;
      // receive_imgs
      this.$bus.$emit("receive_imgs", {
        imgUrl: this.skuImageList[index].imgUrl,
        // bigUrl: skuBigImageList[index].imgUrl, // 将来大图不一样，就要换一个容器
        bigUrl: this.skuImageList[index].imgUrl,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>
