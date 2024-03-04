<script>
import { RouterLink, RouterView } from "vue-router";
import img_ham from "@/assets/img/nav/img_ham.svg";
import img_close from "@/assets/img/nav/img_close.svg";
import backend_nav from "@/components/backend_/backend_nav.vue";

// import HelloWorld from './components/HelloWorld.vue'
export default {
  data() {
    return {
      img_ham,
      img_close,
      nav_fleg: false,
      footer_show_flag: true,
    };
  },
  components: {
    RouterLink,
    RouterView,
    backend_nav,
  },
  
  // mounted() {
  //   this.backend_page_flag=
  // },
  methods: {
    // 控制導覽列是否開啟關閉X =
    nav_off(e) {
      this.nav_fleg = !this.nav_fleg;
      console.log(e.target);
      if (this.nav_fleg === false) {
        e.target.style.backgroundImage = `url('${this.img_ham}')`;
      } else {
        e.target.style.backgroundImage = `url('${this.img_close}')`;
      }
    },
    nav_to_page() {
      this.nav_fleg = !this.nav_fleg;
      this.$refs.colse_btn.style.backgroundImage = `url('${this.img_ham}')`;
    },
    footer_control(data) {
      this.footer_show_flag = data;
      console.log("這邊有執行");
    },
  },
};
</script>

<template>
  <header>
  <!-- 沒有RWD建議不要加 -->
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1" /> -->
    <!-- 配合swiper調整z -->
    <div class="relative z-[2] font-[openhuninn]">
      <nav>
        <RouterLink class="nav_link" to="/"
          ><div class="logo"></div
        ></RouterLink>
        <div class="boob_now_btn hvr-grow">立即訂房</div>
        <div class="colse_btn" ref="colse_btn" @click="nav_off($event)"></div>
        <div ref="nav_full" class="nav_full" v-show="nav_fleg">
          <div class="nav_l">
            <div class="nav_l_img"></div>
          </div>
          <div class="nav_r">
            <div class="nav_logo"></div>
            <RouterLink class="nav_link" to="/" @click="nav_to_page()"
              >首頁</RouterLink
            >
            <RouterLink
              class="nav_link"
              to="/branch_intro"
              @click="nav_to_page()"
              >分館介紹</RouterLink
            >
            <RouterLink
              class="nav_link"
              to="/news_update"
              @click="nav_to_page()"
              >最新消息</RouterLink
            >
            <RouterLink class="nav_link" to="/contact_us" @click="nav_to_page()"
              >聯絡我們</RouterLink
            >
          </div>
        </div>
      </nav>
    </div>
    <backend_nav></backend_nav>
  </header>
  <main class="font-[openhuninn]"><RouterView /></main>

  <footer>
    <div>
      <nav class="footer_nav font-[openhuninn]">
        <div class="footer_nav_t">
          <div class="footer_nav_t_l">
            <div class="footer_logo"></div>
            <div class="content">台中旅館 | 背包客旅店 | 台灣自由行</div>
          </div>
          <div class="footer_nav_t_r">
            <ul>
              <li><RouterLink to="/">首頁</RouterLink></li>
              <li><RouterLink to="/branch_intro">分館介紹</RouterLink></li>
              <li><RouterLink to="/news_update">最新消息</RouterLink></li>
              <li><RouterLink to="/contact_us">聯絡我們</RouterLink></li>
              <li><RouterLink to="/backend_login">員工專區</RouterLink></li>
            </ul>
          </div>
        </div>
        <div class="footer_nav_b">Copyright © 2024 奇異果快捷旅店</div>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
// 浮動元件
.colse_btn {
  @apply fixed top-[40px] right-[40px] w-[50px] h-[50px] bg-[url("@/assets/img/nav/img_ham.svg")] cursor-pointer z-[3];
}
.logo {
  @apply fixed left-[20px] top-[58px] w-[278px] h-[50px] bg-contain bg-no-repeat bg-[url("@/assets/img/nav/img_logo.png")];
}
.boob_now_btn {
  writing-mode: vertical-lr;
  @apply fixed top-[140px] right-[12px] p-[1.15rem] bg-[#384c0a] text-baseWhiteColor rounded-[10px] cursor-pointer shadow-md;
  &:hover {
    @apply bg-mainGreenColor;
  }
}
// 上方導航
.nav_full {
  @apply fixed flex w-full h-[100vh] bg-[#F2FFD4] p-[200px]  z-[2];

  .nav_l {
    @apply flex  justify-center items-center flex-1;
    .nav_l_img {
      @apply w-[550px] h-[550px] bg-[url("@/assets/img/nav/img_kiwi.svg")];
    }
  }
  .nav_r {
    @apply flex flex-col justify-center items-center h-[50vh]  flex-1;
    .nav_logo {
      @apply w-[328px] h-[55px] bg-contain bg-no-repeat  bg-[url("@/assets/img/nav/img_logo.png")];
    }
    .nav_link {
      @apply mt-[40px] text-start w-[140px] text-desktopBodyText;
    }
    .nav_link:hover {
      &::after {
        margin-left: 8px;
        transition: margin-left 0.5s;
      }
    }
    .nav_link::after {
      content: " > ";
    }
  }
}
// 下方footer
footer {
  @apply h-[275px] w-[100%] bg-mainBrownColor;
  .footer_nav {
    @apply flex flex-col w-[100%] h-[100%];
    .footer_nav_t {
      @apply flex flex-row w-[100%] h-[calc(275px_-_40px)];
      .footer_nav_t_l {
        @apply flex flex-col justify-center items-center flex-1;
        .footer_logo {
          @apply w-[328px] h-[55px] bg-contain bg-no-repeat bg-[url("@/assets/img/nav/img_logo.png")];
        }
        .content {
          @apply text-[1.25rem];
        }
      }
      .footer_nav_t_r {
        @apply flex  items-center justify-center flex-1;
        ul {
          @apply flex flex-wrap justify-center;
          li {
            @apply text-[1.25rem] pr-[10px] w-[120px] text-center;
          }
          li::after {
            content: " > ";
          }
          li:hover {
            &::after {
              margin-left: 8px;
              transition: margin-left 0.5s;
            }
          }
        }
      }
    }
    .footer_nav_b {
      @apply flex justify-center  text-[1.25rem];
    }
  }
}
</style>
