<script>
import comp_general_card from "@/components/general/comp_general_card.vue";
import img_tem1 from "@/assets/img/general/img_tem1.jpg";
import img_tem2 from "@/assets/img/general/img_tem2.jpg";
import img_tem3 from "@/assets/img/general/img_tem3.jpg";
import img_tem4 from "@/assets/img/general/img_tem4.jpg";
import img_tem5 from "@/assets/img/general/img_tem5.jpg";
export default {
  data() {
    return {
      img_tem1,
      img_tem2,
      img_tem3,
      img_tem4,
      img_tem5,

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
        {
          title: "精緻旅館獲頒獎",
          content: "精心設計的旅館榮獲設計大獎，為住客提供獨特的入住體驗",
          img: img_tem4,
          date: "2021/8/30",
          belong: "高雄九如店",
        },
        {
          title: "民宿受歡迎",
          content: "受到遊客熱烈歡迎的民宿，提供舒適、溫馨的住宿環境",
          img: img_tem5,
          date: "2021/2/23",
          belong: "高雄車站店",
        },
      ],
      branch: [
        "全部",
        "桃園中壢車站店",
        "台中站前一館",
        "台中站前二館",
        "台中中正店",
        "台中成功店",
        "台中捷運中清店",
        "台中捷運文心店",
        "高雄九如店",
        "高雄車站店",
      ],
      news_obj_filter: [],
      btns: "",
    };
  },

  components: { comp_general_card },
  methods: {
    filter(e) {
      // 樣式設定
      // this.btns = document.querySelectorAll("#btn");
      this.btns.forEach((item) => {
        item.classList.remove("active");
      });
      e.target.classList.add("active");
      // 篩選設定
      this.news_obj_filter = [];
      // 如果點到全部return 不繼續判斷
      if (e.target.innerHTML == "全部") {
        return (this.news_obj_filter = this.news_obj);
      }
      this.news_obj.forEach((element) => {
        if (element.belong == e.target.innerHTML) {
          this.news_obj_filter.push(element);
        }
      });
      console.log(this.news_obj_filter);
    },
  },
  mounted() {
    // 控制footer顯示
    document.querySelector("footer").style.display = "block";
    // 控制後台 nav不顯示
    document.querySelector("#backend_nav").style.display = "none";
    this.news_obj_filter = this.news_obj;
    this.btns = document.querySelectorAll("#btn");
    this.btns.forEach((item) => {
      if (item.innerHTML === "全部") item.classList.add("active");
    });
  },
};
</script>
<template>
  <div class="all">
    <div class="title" data-aos="zoom-in-up">NEWS</div>
    <div class="container">
      <div class="container_l" data-aos="fade-right">
        <ul>
          <button
            type="button"
            v-for="item in branch"
            @click="filter($event)"
            :key="item.id"
          >
            <li id="btn">{{ item }}</li>
          </button>
          <!-- <button type="button" @click="filter($event)">
            <li>台中站前一館</li>
          </button>
          <button type="button" @click="filter($event)">
            <li>台中站前二館</li>
          </button>
          <button type="button" @click="filter($event)">
            <li>台中中正店</li>
          </button>
          <button type="button" @click="filter($event)">
            <li>台中成功店</li>
          </button>
          <button type="button" @click="filter($event)">
            <li>台中捷運中清店</li>
          </button>
          <button type="button" @click="filter($event)">
            <li>台中捷運文心店</li>
          </button>
          <button type="button" @click="filter($event)">
            <li>高雄九如店</li>
          </button>
          <button type="button" @click="filter($event)">
            <li>高雄車站店</li>
          </button> -->
        </ul>
      </div>
      <div class="container_r" data-aos="fade-up">
        <comp_general_card
          v-for="item in news_obj_filter"
          :imageUrl="item.img"
          :pop_up_title="item.title"
          :pop_up_content="item.content"
          :key="item.id"
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
</template>
<style lang="scss" scoped>
.all {
  @apply flex flex-col justify-center items-center;
  .title {
    @apply flex justify-center text-desktopLgTitle pt-[176px] font-semibold;
  }
  .container {
    @apply w-[1265px] h-[972px] flex mt-[116px] mb-[116px];
    .container_l {
      @apply w-[320px]  h-[100%] text-desktopBodyText;
      ul {
        @apply flex flex-col items-start gap-[20px];
        li {
          @apply px-[10px] py-[10px];
        }
        button {
          @apply rounded-sm;
          &:hover {
            @apply bg-mainGreenColor text-baseWhiteColor;
          }
        }
      }
    }

    .container_r {
      @apply w-[calc(1265px_-_320px)] grid grid-cols-3 gap-3;
    }
  }
}
.active {
  @apply bg-mainGreenColor text-baseWhiteColor;
}
</style>
