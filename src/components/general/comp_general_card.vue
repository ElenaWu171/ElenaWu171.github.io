<script>
export default {
  data() {
    return {
      card_b_l_flag: true,
    };
  },
};
</script>
<template>
  <div class="card">
    <div class="card_t"></div>
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
      <div class="card_b_r"><slot name="more">more</slot></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  @apply w-[312px] h-[474px];
  .card_t {
    @apply w-[100%] h-[240px] rounded-[20px] border-mainGreenColor border-[2px] bg-[url("@/assets/img/general/img_news_default.svg")];
  }
  .card_m {
    @apply p-[10px];
    .card_m_title {
      @apply w-[100%] h-[66px] text-[1.875rem] font-semibold truncate;
    }
    .card_m_content {
      @apply w-[100%] h-[90px]  text-desktopBodyText truncate;
    }
  }
  .card_b {
    @apply flex justify-around text-desktopBodyText  pl-[10px] pr-[10px] text-mainBrownColor;
  }
}
</style>
