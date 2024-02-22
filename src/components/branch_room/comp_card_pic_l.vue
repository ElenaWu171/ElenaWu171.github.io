<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import img_tem7 from "@/assets/img/general/img_tem7.jpg";
import img_tem8 from "@/assets/img/general/img_tem8.jpg";
import img_tem9 from "@/assets/img/general/img_tem9.jpg";
import img_tem10 from "@/assets/img/general/img_tem10.jpg";
import img_tem11 from "@/assets/img/general/img_tem11.jpg";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Gallery",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data() {
    return {
      currentSlide: 0,
      slides: [img_tem7, img_tem8, img_tem9, img_tem10, img_tem11],
    };
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
  // mounted:{

  // },
  props: {
    // 控制排版要圖片置左或右 1置右 0置左
    change_branch_room_index: { type: Number, default: 1 },
    change_branch_room_img: {
      type: Array,
    },
  },
});
</script>
<template>
  <div class="card">
    <div class="card_t">
      <!-- 父層排序方式 -->
      <div
        class="card_t_l img"
        :style="{ order: `${change_branch_room_index}` }"
      >
        <!-- 照片 -->
        <Carousel
          id="gallery"
          :items-to-show="1"
          :wrap-around="false"
          v-model="currentSlide"
        >
          <!-- 父層傳遞相簿圖片change_branch_room_img arrary -->
          <Slide v-for="item in change_branch_room_img" :key="item.id">
            <div
              class="carousel__item"
              :style="{ backgroundImage: `url(${item})` }"
            ></div>
          </Slide>
        </Carousel>
        <!-- 下方圖片 -->
        <Carousel
          id="thumbnails"
          :items-to-show="4"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
        >
          <Slide v-for="(item, index) in change_branch_room_img" :key="item.id">
            <div
              class="carousel__item"
              @click="slideTo(index)"
              :style="{ backgroundImage: `url(${item})` }"
            ></div>
          </Slide>
        </Carousel>
      </div>
      <div class="card_t_r">
        <div class="title">
          <slot name="branch_room_names">雙人房(雙床房)</slot>
        </div>
        <div class="content">
          <ul>
            <li>住房人數：<slot name="branch_room_headcount">2-3人</slot></li>
            <li>
              地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;板：<slot
                name="branch_room_type"
                >雙床</slot
              >
            </li>
            <li>
              坪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;數：<slot
                name="branch_room_size"
                >約6坪</slot
              >
            </li>
            <li>
              地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;板：<slot
                name="branch_room_floor"
                >木頭地板</slot
              >
            </li>
            <li>
              浴&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;室：<slot
                name="branch_room_bathroom"
                >乾溼分離</slot
              >
            </li>
            <li>
              窗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;戶：<slot
                name="branch_room_window"
                >依房型</slot
              >
            </li>
            <li>
              加&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人：<slot
                name="branch_room_extra_persons"
                >不可加人</slot
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card_b">
      <ul>
        <li><button type="button">價格</button></li>
        <li><button type="button">注意事項</button></li>
        <li><button type="button">房間設施</button></li>
        <li><button type="button">我要訂房</button></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  @apply w-[1194px] h-[677px];
  .card_t {
    @apply flex w-[100%] h-[600px];
    .card_t_l {
      @apply flex-1  ;
      #gallery {
        @apply w-[100%];
        .carousel__item {
          @apply w-[100%] h-[500px]  bg-cover bg-no-repeat bg-center;
        }
      }
      #thumbnails {
        .carousel__item {
          @apply w-[100%] h-[calc(677px_-_500px_-_67px)] border-[2px] border-baseWhiteColor bg-cover bg-no-repeat bg-center;
        }
      }
    }
    .card_t_r {
      @apply flex-1;
      .title {
        @apply h-[150px] w-[100%] flex justify-center items-center text-desktopLgTitle border-b-[0.5px] border-mainGreenColor;
      }
      .content {
        @apply w-[100%]  flex h-[450px] items-center;
        ul {
          @apply list-disc pl-[60px];
          li {
            @apply text-desktopBodyText;
          }
        }
      }
    }
  }
  .card_b {
    @apply flex justify-center items-center h-[67px] border-b-[3px] border-mainGreenColor;
    ul {
      @apply flex justify-around w-[100%] text-desktopBodyText;
      li {
        @apply py-[6px]  px-[10px];
      }
    }
  }
}
</style>
