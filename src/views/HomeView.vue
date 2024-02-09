<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import comp_general_card from "@/components/general/comp_general_card.vue";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    comp_general_card,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<template>
  <div>
    <div>
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide class="banner">Slide 1</swiper-slide>
        <swiper-slide class="banner">Slide 2</swiper-slide
        ><swiper-slide class="banner">Slide 3</swiper-slide>
      </swiper>
    </div>
    <div class="about_kiwi">
      <div class="about_kiwi_t">
        <div class="title">關於奇異果</div>
      </div>
      <div class="about_kiwi_b">
        <div class="img"></div>
        <div class="text">
          優質、簡約、舒適、平價<br />
          奇異果快捷旅店是瑞石旅館事業集團旗下第一個獨立品牌，<br />
          「從旅客的角度出發，用心服務與旅客互動」，以年輕、舒活的清新風格，<br />
          打造出全新優質、簡約、舒適的平價旅館體驗。
        </div>
      </div>
    </div>
    <div class="news_box parallax">
      <div class="news">
        <div class="title">最新消息</div>
        <div class="content">
          <comp_general_card>
            <!-- custom -->
            <template v-slot:title> 旅店發行之住宿優惠很豐富 </template>
            <template v-slot:content>
              一、本商品（服務）禮劵已加入由台灣省旅館商
            </template>
            <template v-slot:custom> 2024/1/27 </template>
          </comp_general_card>
          <comp_general_card>
            <template v-slot:title> ❤全新裝潢~超優會活動來</template>
            <template v-slot:content> 無 </template>
            <template v-slot:custom> 2024/1/2 </template>
          </comp_general_card>
          <comp_general_card>
            <template v-slot:title> KIWI高雄九如店最大優惠活動</template>
            <template v-slot:content>
              優惠方案不適用網路訂房及優惠不得併用哦
            </template>
            <template v-slot:custom> 2023/9/30 </template>
          </comp_general_card>
        </div>
      </div>
    </div>
    <div class="feature">
      <div class="feature_t">
        <div class="title">我們的特色</div>
      </div>
      <div class="feature_b">
        <div class="text">
          奇異果快捷旅店突破一般旅館傳統的框架，加入許多<br />時尚、簡約、舒適、便捷的舒活元素，創造出一間<br />全新旅店空間概念，提供旅客便捷、全方位、發自內心的<br />互動與服務，讓旅客一踏進KIWI
          HOTEL，就能自然放鬆，<br />卸除旅途的疲憊，就如同KIWI奇異果的特色，小巧又饒富滋味。
        </div>
        <div class="img"></div>
      </div>
    </div>
    <div class="branch_box parallax">
      <div class="brench">
        <div class="title"></div>
        <div class="brench_card"></div>
      </div>
    </div>
    <div class="book_now"></div>
  </div>

  <!-- <comp_general_card></comp_general_card> -->
</template>
<style lang="scss" scoped>
.banner {
  @apply w-[100%] h-[768px] bg-[skyblue];
}
.about_kiwi {
  @apply w-[100%] h-[522px] bg-mainBrownColor;
  .about_kiwi_t {
  }
  .about_kiwi_b {
    @apply flex justify-center w-[100%] h-[312px] bg-mainGreenColor mt-[100px];
    .img {
      @apply relative mt-[-5%] mr-[45px] w-[448px] h-[367px] bg-[url("@/assets/img/home_view/img_about_kiwi.jpg")] bg-cover bg-no-repeat border-mainYellowColor border-[10px] rounded-[50%];
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: -95px;
        left: 20px;
        width: 160px;
        height: 108px;
        background-image: url("@/assets/icons/home_view/icon_dec_seeds.svg");
      }
    }
    .text {
      @apply pt-[47px] tracking-wide leading-normal  text-baseWhiteColor text-desktopBodyText;
    }
  }
}
.news_box {
  @apply w-[100%] h-[703px] flex justify-center;
  .content {
    @apply w-[1039px] h-[640px] flex justify-between mt-[80px];
  }
}
.parallax {
  @apply w-[100%] h-[100%] bg-[url("@/assets/img/general/img_bg.svg")] bg-fixed bg-center bg-cover;
}
.feature {
  @apply flex flex-col w-[100%] h-[619px] bg-mainGreenColor;
  .feature_b {
    @apply flex justify-center gap-[12px] h-[346px] bg-mainGreenColor mt-[100px];
    .text {
      @apply pt-[47px] tracking-wide leading-normal  text-baseWhiteColor text-desktopBodyText;
    }
    .img {
      @apply relative  mr-[45px] w-[448px] h-[367px] bg-[url("@/assets/img/home_view/img_about_kiwi.jpg")] bg-no-repeat bg-cover border-mainYellowColor border-[10px] rounded-[50%];
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: -100px;
        right: 20px;
        width: 160px;
        height: 108px;
        rotate: 45deg;
        background-image: url("@/assets/icons/home_view/icon_dec_seeds.svg");
      }
    }
  }
}
.branch_box {
  @apply w-[100%] h-[1000px] flex flex-col justify-center;
  .brench {
    @apply w-[100%] h-[750px] bg-SecPinkColor;
  }
}
.title {
  @apply flex justify-center text-desktopLgTitle pt-[22px] font-semibold;
}
</style>
