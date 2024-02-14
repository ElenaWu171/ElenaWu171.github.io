<script>
import Swal from "sweetalert2";

// import imageUrl from "@/assets/img/general/img_news_default.svg";
export default {
  data() {
    return {
      card_b_l_flag: true,
    };
  },
  props: {
    imageUrl: {
      type: String,
    },
    pop_up_title: {
      type: String,
    },
    pop_up_content: {
      type: String,
    },
  },
  methods: {
    pop_up() {
      Swal.fire({
        imageUrl: this.imageUrl,
        imageHeight: 500,
        title: this.pop_up_title,
        text: this.pop_up_content,
      });
    },
  },
};
</script>
<template>
  <div class="card">
    <div class="card_t" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <div class="tag">
        <slot name="belong_branch">全館適用</slot>
      </div>
    </div>
    <div class="card_m">
      <div class="card_m_title">
        <!-- 使用v-slot:title -->
        <slot name="title">標題文字</slot>
      </div>
      <div class="card_m_content">
        <slot name="content"
          >內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</slot
        >
      </div>
    </div>
    <div class="card_b">
      <div class="card_b_l" v-if="card_b_l_flag">
        <!-- google 或 日期 -->
        <slot name="custom">google map</slot>
      </div>
      <div class="card_b_r" @click="pop_up()">
        <slot name="more">more</slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  @apply w-[312px] h-[474px] border-[2px] border-mainBrownColor rounded-[20px] p-[4px];
  .card_t {
    @apply relative w-[100%] h-[240px] rounded-[20px] border-mainBrownColor  border-[2px] bg-cover bg-center bg-no-repeat;
    .tag {
      @apply absolute leading-[40px] h-[40px] px-[4px] py-[2px] bg-mainGreenColor text-baseWhiteColor text-desktopBackendBodyText right-[8px] top-[8px] rounded-[6px];
    }
  }
  .card_m {
    @apply p-[10px];
    .card_m_title {
      @apply w-[100%] h-[66px] text-[1.875rem]  truncate text-[#2E3F09];
    }
    .card_m_content {
      @apply w-[100%] h-[90px]  text-desktopBodyText truncate text-baseBlackGrayColor;
    }
  }
  .card_b {
    @apply flex justify-between text-desktopBodyText  pl-[10px] pr-[10px] text-mainBrownColor;

    .card_b_r:hover {
      @apply text-mainGreenColor cursor-pointer;
    }
  }
}
</style>
