<script>
// 待辦事項 抓取http://localhost:3000/branch_facility獲取分行ID跟照片ID
// 先判斷該方行有哪些照片ID，在從http://localhost:3000/pictures抓取圖片
// 隨機獲取房間圖片 https://source.unsplash.com/featured/?bedroom
import { Swiper, SwiperSlide } from "swiper/vue";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import comp_general_card from "@/components/general/comp_general_card.vue";
import img_tem1 from "@/assets/img/general/img_tem1.jpg";
import img_tem2 from "@/assets/img/general/img_tem2.jpg";
import img_tem3 from "@/assets/img/general/img_tem3.jpg";
import img_tem4 from "@/assets/img/general/img_tem4.jpg";
import img_tem5 from "@/assets/img/general/img_tem5.jpg";
import img_tem6 from "@/assets/img/general/img_tem6.jpg";
export default {
  data() {
    return {
      img_tem1,
      img_tem2,
      img_tem3,
      img_tem4,
      img_tem5,
      img_tem6,
      facilities: [
        "早餐餐廳",
        "商務中心",
        "殘疾人客房",
        "殘疾人設施",
        "無菸房",
        "電梯",
        "停車場",
        "熨衣板",
        "小廚房",
        "微波爐",
        "自行車租借客房服務",
        "每日報紙陽台/露台",
      ],
      imgs: {
        img_tem1,
        img_tem2,
        img_tem3,
        img_tem4,
        img_tem5,
        img_tem6,
      },

      attractions_obj: [
        {
          title: "台中秋虹谷",
          content:
            "靜謐的都市綠地空間，以自然步道和充滿魚群、烏龜和鳥類的大型生態池聞名。",
          img: img_tem1,
        },
        {
          title: "九份老街",
          content:
            "保存完整的日據時期建築，古老的巷弄中滿是台灣特色的小吃和手作藝品。",
          img: img_tem2,
        },
        {
          title: "太魯閣國家公園",
          content: "擁有壯麗的峽谷景觀，被譽為台灣最美的國家公園之一。",
          img: img_tem3,
        },
        {
          title: "清境農場",
          content:
            "清新的高山空氣，美麗的花海和寧靜的湖泊，是度假和放鬆的好地方。",
          img: img_tem4,
        },
        {
          title: "綠島",
          content: "被蔚藍海水環繞的小島，擁有美麗的珊瑚礁和豐富的海洋生態。",
          img: img_tem5,
        },
        {
          title: "阿里山",
          content:
            "以茂密的高山森林和美麗的日出著稱，是台灣最知名的旅遊景點之一。",
          img: img_tem6,
        },
        {
          title: "淡水老街",
          content:
            "擁有豐富的歷史和文化，保留了許多古老的建築和傳統的台灣小吃。",
          img: img_tem1,
        },
        {
          title: "日月潭",
          content:
            "是台灣最大的淡水湖泊，湖畔風光優美，有豐富的水上活動和湖光山色。",
          img: img_tem2,
        },
        {
          title: "九宮格",
          content: "位於金門的九宮格古蹟，是一個充滿歷史和神秘感的地方。",
          img: img_tem3,
        },
        {
          title: "奇美博物館",
          content: "擁有豐富的藝術和文化藏品，是台灣最大的私人博物館之一。",
          img: img_tem4,
        },
        {
          title: "墾丁大街",
          content:
            "墾丁夜市的中心，有各種各樣的小吃和特色商品，是夜生活的熱門去處。",
          img: img_tem5,
        },
        {
          title: "金瓜石黃金博物館",
          content: "位於黃金博物館的金瓜石，保存了台灣黃金開採的歷史和文化。",
        },
        {
          title: "草嶺古道",
          content: "是台灣其中一條古老的山區步道，風景秀麗，適合登山和觀光。",
        },
        {
          title: "東海岸海岸線",
          content: "擁有壯觀的海蝕地形和美麗的海灣，是自然愛好者的理想之地。",
        },
        {
          title: "六合夜市",
          content:
            "位於台中市的夜市，有各式各樣的美食和商品，是品味台灣夜市文化的好地方。",
        },
      ],
      news_obj: [
        {
          title: "榮獲優良住宿",
          content: "恭賀獲得觀光大聯盟認證為最優秀民宿",
          img: img_tem1,
        },
        {
          title: "五星級飯店入選",
          content: "豪華飯店榮獲國際五星級評鑑，提供一流的服務和設施",
          img: img_tem2,
        },
        {
          title: "度假村獲得業界好評",
          content: "風景優美的度假村被譽為最佳度假勝地，受到業界和遊客好評",
          img: img_tem3,
        },
        {
          title: "精緻旅館獲頒獎",
          content: "精心設計的旅館榮獲設計大獎，為住客提供獨特的入住體驗",
          img: img_tem4,
        },
        {
          title: "民宿受歡迎",
          content: "受到遊客熱烈歡迎的民宿，提供舒適、溫馨的住宿環境",
          img: img_tem5,
        },
      ],
      branch_info_obj_api: [],
      branch_key: "",
      choosen_branch: [],
      branch_pictures_obj_api: [],
      choosen_branch_pictures: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    comp_general_card,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },

  mounted() {
    // 控制footer顯示
    document.querySelector("footer").style.display = "block";
    // 控制後台 nav不顯示
    document.querySelector("#backend_nav").style.display = "none";
    // 取得資料
    fetch("http://localhost:3000/branch")
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        // 順序 : 或去數據-> 獲取sessionStorage --> 篩選數據渲染畫面
        console.log(data);
        this.branch_info_obj_api = data;
        this.branch_key = sessionStorage.getItem("branch_key");
        this.show_which_branch();
      })
      .catch((error) => console.error(error));
    // 取得圖片資料
    fetch("http://localhost:3000/pictures")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.branch_pictures_obj_api = data;
        this.branch_key = sessionStorage.getItem("branch_key");
        this.show_which_branch_pictures();
      })
      .catch((error) => console.error(error));
    // 取得存在sessionStorage的資料(來自branch_info.vue)

    // console.log(this.branch_key);
    // 執行比對函數
  },
  methods: {
    // 產生對應的旅店資訊物件
    show_which_branch() {
      this.choosen_branch = this.branch_info_obj_api.filter((branch) => {
        return branch.BRANCH_ID == this.branch_key;
      });
      console.log(this.choosen_branch);
    },
    // 產生對應的旅店封面照片物件
    show_which_branch_pictures() {
      this.choosen_branch_pictures = this.branch_pictures_obj_api.filter(
        (pictures) => {
          return pictures.PICTURES_ID == this.branch_key;
        }
      );
      console.log(this.choosen_branch_pictures);
    },
  },
};
</script>
<template>
  <div>
    <div class="all">
      <button type="button" class="go_to_room hvr-radial-in">
        <RouterLink to="/branch_room">前往房型<br />介紹</RouterLink>
      </button>
      <div class="basic_info" data-aos="fade-up">
        <div
          class="basic_info_l"
          :style="{
            backgroundImage: `url(${choosen_branch_pictures[0]?.PICTURES})`,
          }"
        ></div>
        <div class="basic_info_r">
          <div class="basic_info_title">
            <!-- 一開始內容為加載完成加入?避免加載錯誤，确保异步加载的数据已经准备好 -->
            {{ choosen_branch[0]?.BRANCH_NAMES }}
          </div>
          <div class="basic_info_content">
            <div class="tel">
              {{ choosen_branch[0]?.BRANCH_CONTACT_NUMBER }}
            </div>
            <div class="address">{{ choosen_branch[0]?.BRANCH_ADRESS }}</div>
          </div>
          <button type="button" class="btn">
            <RouterLink to="/branch_room">前往房型介紹</RouterLink>
          </button>
        </div>
      </div>
      <div class="about_branch">
        <div class="title text-baseWhiteColor" data-aos="fade-up">關於我們</div>
        <div class="about_branch_content" data-aos="fade-up">
          {{ choosen_branch[0]?.BRANCH_INTRO }}
        </div>
      </div>
      <div class="branch_facility" data-aos="fade-up">
        <div class="branch_facility_t">
          <div class="title">飯店設施</div>
        </div>
        <div class="branch_facility_b">
          <div class="branch_facility_b_l">
            <swiper
              :direction="'vertical'"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              class="mySwiper branch_facility_mySwiper"
            >
              <swiper-slide
                v-for="item in imgs"
                class="facility_img"
                :key="item.id"
                :style="{ backgroundImage: `url(${item})` }"
              ></swiper-slide>
            </swiper>
          </div>
          <div class="branch_facility_b_r">
            <ul class="facilities_box">
              <li v-for="item in facilities" :key="item.id">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="attractions" data-aos="fade-up">
        <div class="title">周圍景點</div>
        <div class="attractions_content">
          <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :coverflowEffect="{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }"
            :pagination="false"
            :modules="modules"
            :initialSlide="5"
            class="mySwiper"
          >
            <swiper-slide
              class="swiper-slide_attractions"
              v-for="item in attractions_obj"
              :key="item.id"
              ><comp_general_card :imageUrl="item.img">
                <template v-slot:title> {{ item.title }} </template>
                <template v-slot:content>
                  {{ item.content }}
                </template>
              </comp_general_card>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="media" data-aos="fade-up">
        <div class="title">媒體曝光</div>
        <div class="attractions_content">
          <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :coverflowEffect="{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }"
            :pagination="false"
            :modules="modules"
            :initialSlide="2"
            class="mySwiper"
          >
            <swiper-slide
              class="swiper-slide_attractions"
              v-for="item in news_obj"
              :key="item.id"
              ><comp_general_card :imageUrl="item.img">
                <template v-slot:title> {{ item.title }} </template>
                <template v-slot:content>
                  {{ item.content }}
                </template>
              </comp_general_card>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="location" data-aos="fade-up">
        <div class="title">我們的位置</div>
        <div class="location_iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.3493092368976!2d121.22685657595436!3d24.954227441498034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34682247c75cff47%3A0x961d8c0f3a1507df!2z5aWH55Ww5p6c5YWx5Lqr5peF5bqXLeS4reWjoui7iuermeW6lyBLaXdpIFNoYXJlIEhvdGVs!5e0!3m2!1szh-TW!2stw!4v1707730008048!5m2!1szh-TW!2stw"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="follow_us" data-aos="fade-up">
        <div class="title">關注我們</div>
        <div class="facebook_iframe">
          <iframe
            :src="choosen_branch[0]?.BRANCH_FACEBOOK_IFRAME"
            width="395"
            height="396"
            style="border: none; overflow: hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.all {
  @apply mt-[186px] flex flex-col items-center gap-y-[120px];
  .go_to_room {
    @apply flex justify-center items-center text-center w-[150px] h-[150px] bg-SecPinkColor rounded-[999px] fixed top-[80vh] right-[30px] text-desktopBodyText;
  }
  .basic_info {
    @apply flex   w-[1220px] h-[600px];
    .basic_info_l {
      @apply flex-1 bg-cover bg-no-repeat bg-center rounded-[12px];
    }
    .basic_info_r {
      @apply flex-1 flex flex-col pt-[117px] pl-[54px];
      .basic_info_title {
        @apply text-desktopLgTitle tracking-wider;
      }
      .basic_info_content {
        @apply flex flex-col justify-center mt-[67px] mb-[67px]  h-[140px] text-desktopBodyText;
        .tel {
          &::before {
            @apply content-[''] w-[30px] h-[30px] inline-block bg-contain bg-no-repeat  bg-center bg-[url("@/assets/icons/branch_detail/icon_location_b.svg")];
          }
        }
        .address {
          &::before {
            @apply content-[''] w-[30px] h-[30px] inline-block bg-contain bg-no-repeat   bg-center bg-[url("@/assets/icons/branch_detail/icon_phone_b.svg")];
          }
        }
      }
      .btn {
        @apply ml-[12px] w-[180px] h-[50px] rounded-[20px] text-baseWhiteColor text-desktopBackendBodyText bg-mainGreenColor;
      }
      .btn:hover {
        &::after {
          margin-left: 8px;
          transition: margin-left 0.5s;
        }
      }
      .btn::after {
        content: " > ";
      }
    }
  }
  .about_branch {
    @apply pt-[52px] pb-[52px] w-[100%] h-[388px] bg-mainGreenColor flex flex-col items-center;
    .about_branch_content {
      @apply pt-[40px] px-[60px] text-desktopBodyText text-baseWhiteColor;
    }
  }

  .branch_facility {
    @apply w-[1220px] h-[751px] text-[20px];
    .branch_facility_b {
      @apply flex mt-[60px];
      .branch_facility_mySwiper {
        @apply h-[626px] bg-baseBlackColor;
      }
      .branch_facility_b_l {
        @apply flex-1;
        .facility_img {
          @apply bg-center bg-cover bg-no-repeat;
        }
      }
      .branch_facility_b_r {
        @apply flex-1 flex justify-center items-center;
        .facilities_box {
          @apply w-[453px] h-[279px] grid grid-rows-6  grid-cols-2;
        }
      }
    }
  }
  .attractions {
    @apply w-[1220px] h-[600px];
    .swiper-slide_attractions {
      @apply mt-[60px] w-[312px]  rounded-[20px] overflow-hidden;
    }
  }
  .media {
    @apply w-[1220px] h-[600px];
    .swiper-slide_attractions {
      @apply mt-[60px] w-[312px]  rounded-[20px] overflow-hidden;
    }
  }
  .location {
    @apply w-[1220px] h-[600px];
    .location_iframe {
      @apply mt-[60px] w-[100%] flex justify-center;
    }
  }
  .follow_us {
    @apply w-[1220px] h-[600px];
  }
  .facebook_iframe {
    @apply mt-[60px] w-[100%] flex justify-center;
  }
  .title {
    @apply text-desktopLgTitle w-[100%] flex justify-center tracking-widest;
  }
}
// .swiper-wrapper {
//   background-image: none !important;
// }
</style>
