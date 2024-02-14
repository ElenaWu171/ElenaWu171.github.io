<script>
import img_tem1 from "@/assets/img/general/img_tem1.jpg";
import img_tem2 from "@/assets/img/general/img_tem2.jpg";
import img_tem3 from "@/assets/img/general/img_tem3.jpg";
import img_tem4 from "@/assets/img/general/img_tem4.jpg";
import img_tem5 from "@/assets/img/general/img_tem5.jpg";
import img_tem6 from "@/assets/img/general/img_tem6.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import "animate.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import comp_general_card from "@/components/general/comp_general_card.vue";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  data() {
    return {
      img_tem1,
      img_tem2,
      img_tem3,
      img_tem4,
      img_tem5,
      img_tem6,
      imgs: {
        img_tem1,
        img_tem2,
        img_tem3,
        img_tem4,
        img_tem5,
      },
      news_obj: [
        {
          title: "榮獲優良住宿",
          content: "恭賀獲得觀光大聯盟認證為最優秀民宿",
          img: img_tem1,
          date: "2024/2/14",
          belong: "台中站前一館",
        },
        {
          title: "五星級飯店入選",
          content: "豪華飯店榮獲國際五星級評鑑，提供一流的服務和設施",
          img: img_tem2,
          date: "2024/1/15",
          belong: "台中站前二館",
        },
        {
          title: "度假村獲得業界好評",
          content: "風景優美的度假村被譽為最佳度假勝地，受到業界和遊客好評",
          img: img_tem3,
          date: "2023/1/1",
          belong: "台中成功店",
        },
      ],
    };
  },
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
        :initialSlide="3"
        class="mySwiper"
      >
        <swiper-slide
          v-for="item in imgs"
          :key="item.id"
          class="banner"
          :style="{ backgroundImage: `url(${item})` }"
        ></swiper-slide>
        <!-- <swiper-slide class="banner">Slide 2</swiper-slide
        ><swiper-slide class="banner">Slide 3</swiper-slide>-->
      </swiper>
      <div class="welcome" data-aos="zoom-in-up">
        <p>歡迎光臨</p>
        <p>奇異果快捷旅店</p>
      </div>
    </div>
    <div class="about_kiwi">
      <div class="about_kiwi_t">
        <div class="title text-baseWhiteColor">關於奇異果</div>
      </div>
      <div class="about_kiwi_b">
        <div class="img" data-aos="fade-right"></div>
        <div class="text" data-aos="fade-left">
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
        <div class="content" data-aos="fade-down">
          <!-- <comp_general_card class="hvr-grow cursor-pointer">
       
            <template v-slot:title> 旅店發行之住宿優惠很豐富 </template>
            <template v-slot:content>
              一、本商品（服務）禮劵已加入由台灣省旅館商
            </template>
            <template v-slot:custom> 2024/1/27 </template>
          </comp_general_card>
          <comp_general_card class="hvr-grow cursor-pointer">
            <template v-slot:title> ❤全新裝潢~超優會活動來</template>
            <template v-slot:content> 無 </template>
            <template v-slot:custom> 2024/1/2 </template>
          </comp_general_card>
          <comp_general_card class="hvr-grow cursor-pointer">
            <template v-slot:title> KIWI高雄九如店最大優惠活動</template>
            <template v-slot:content>
              優惠方案不適用網路訂房及優惠不得併用哦
            </template>
            <template v-slot:custom> 2023/9/30 </template>
          </comp_general_card> -->
          <comp_general_card
            v-for="item in news_obj"
            :imageUrl="item.img"
            :pop_up_title="item.title"
            :pop_up_content="item.content"
            :key="item.id"
            class="hvr-grow cursor-pointer"
          >
            <template v-slot:title> {{ item.title }} </template>
            <template v-slot:content>
              {{ item.content }}
            </template>
            <template v-slot:custom>
              {{ item.date }}
            </template>
            <template v-slot:belong_branch>
              {{ item.belong }}
            </template>
          </comp_general_card>
        </div>
      </div>
    </div>
    <div class="feature">
      <div class="feature_t">
        <div class="title text-baseWhiteColor">我們的特色</div>
      </div>
      <div class="feature_b">
        <div class="text" data-aos="fade-right">
          奇異果快捷旅店突破一般旅館傳統的框架，加入許多<br />時尚、簡約、舒適、便捷的舒活元素，創造出一間<br />全新旅店空間概念，提供旅客便捷、全方位、發自內心的<br />互動與服務，讓旅客一踏進KIWI
          HOTEL，就能自然放鬆，<br />卸除旅途的疲憊，就如同KIWI奇異果的特色，小巧又饒富滋味。
        </div>
        <div class="img" data-aos="fade-left"></div>
      </div>
    </div>
    <div class="branch_box parallax">
      <div class="title">分館介紹</div>
      <div class="brench" data-aos="fade-down">
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            class="slide hvr-pulse-shrink"
            :style="{ backgroundImage: `url(${img_tem1})` }"
            ><div class="text">桃園中壢車站店</div></swiper-slide
          >
          <swiper-slide
            class="slide hvr-pulse-shrink"
            :style="{ backgroundImage: `url(${img_tem2})` }"
          >
            <div class="text">台中站前一館</div></swiper-slide
          ><swiper-slide
            class="slide hvr-pulse-shrink"
            :style="{ backgroundImage: `url(${img_tem3})` }"
            ><div class="text">台中站前二館</div></swiper-slide
          >
          <swiper-slide
            class="slide hvr-pulse-shrink"
            :style="{ backgroundImage: `url(${img_tem4})` }"
            ><div class="text">台中中正店</div></swiper-slide
          ><swiper-slide
            class="slide hvr-pulse-shrink"
            :style="{ backgroundImage: `url(${img_tem5})` }"
            ><div class="text">台中成功店</div></swiper-slide
          >
          <swiper-slide
            class="slide hvr-pulse-shrink"
            :style="{ backgroundImage: `url(${img_tem6})` }"
            ><div class="text">台中捷運中清店</div></swiper-slide
          ><swiper-slide
            class="slide hvr-pulse-shrink"
            :style="{ backgroundImage: `url(${img_tem1})` }"
            ><div class="text">
              台中捷運文心店<br />(逢甲1號店)
            </div></swiper-slide
          >
          <swiper-slide
            class="slide hvr-pulse-shrink"
            :style="{ backgroundImage: `url(${img_tem2})` }"
            ><div class="text">高雄九如店</div></swiper-slide
          ><swiper-slide
            class="slide hvr-pulse-shrink"
            :style="{ backgroundImage: `url(${img_tem3})` }"
            ><div class="text">高雄車站店</div></swiper-slide
          >
        </swiper>
      </div>
    </div>
    <div class="book_now hvr-sweep-to-right">
      Book Now
      <div class="icon"></div>
    </div>
  </div>

  <!-- <comp_general_card></comp_general_card> -->
</template>
<style lang="scss" scoped>
.welcome {
  @apply absolute bottom-[10%] right-[0] z-[1] text-[80px] w-[50%] bg-mainGreenColor bg-opacity-80 text-baseWhiteColor text-center rounded-[10px];
}
.banner {
  @apply w-[100%] h-[100vh] bg-[skyblue] bg-cover bg-no-repeat bg-center;
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
    @apply w-[100%] h-[750px];
  }
}

.brench {
  @apply flex items-center;
  .mySwiper {
    @apply h-[487px];

    .slide {
      @apply shadow-md cursor-pointer flex justify-center items-center rounded-[20px] border-mainGreenColor border-[2px] bg-cover bg-center bg-no-repeat;

      .text {
        @apply w-[100%] flex justify-center items-center text-desktopTitle text-baseWhiteColor bg-baseBlackGrayColor bg-opacity-[0.8];
      }
    }
  }
}
.book_now {
  @apply cursor-pointer w-[100%] h-[185px] flex justify-center items-center gap-[12px] bg-mainYellowColor text-desktopLgTitle;
  .icon {
    @apply w-[106px] h-[106px] bg-[url("@/assets/icons/home_view/icon_book_now.svg")];
  }
}
.title {
  @apply flex justify-center text-desktopLgTitle pt-[22px]  tracking-widest;
}
</style>
