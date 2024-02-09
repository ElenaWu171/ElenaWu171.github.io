<script>
import tem_img from "@/assets/img/general/img_tem.jpg";
export default {
  data() {
    return { tem_img };
  },
};
</script>
<template>
  <div class="card-container">
    <div class="card cover">
      <div class="card_t" :style="{ backgroundImage: `url(${tem_img})` }"></div>
      <div class="card_b">
        <div class="title">
          <slot name="title">桃園中壢車站店</slot>
        </div>
        <div class="tel"><slot name="tel">03-1234567</slot></div>
        <div class="adress">
          <slot name="adress">桃園市中壢區新興路286號7</slot>
        </div>
      </div>
    </div>
    <div class="card back">
      <div class="back_img"></div>
      <button class="more" type="button">更多</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  @apply flex flex-col  items-center w-[100%] h-[673px] rounded-[20px] bg-mainBrownColor p-[25px] text-baseWhiteColor mt-[30px];
  .card_t {
    @apply h-[60%] w-[100%] rounded-[20px] mb-[20px];
  }
  .card_b {
    @apply justify-center;
    .title {
      @apply flex justify-center text-desktopLgTitle font-bold mb-[20px];
    }
    .tel {
      @apply text-desktopTitle flex items-center justify-center;
      &::before {
        @apply content-[''] w-[47px] h-[47px] inline-block bg-no-repeat  bg-center bg-[url("@/assets/icons/general/icon_phone.svg")];
      }
    }
    .adress {
      @apply text-desktopTitle  flex items-center;
      &::before {
        @apply content-[''] w-[47px] h-[47px] inline-block bg-no-repeat  bg-center bg-[url("@/assets/icons/general/icon_location.svg")];
      }
    }
  }

  .more {
    @apply mt-[20px] p-[12px] w-[20%] rounded-[20px] bg-mainYellowColor text-baseBlackColor text-desktopTitle;
    &:hover {
      @apply scale-[1.05];
    }
  }
  .back_img {
    @apply w-[300px] h-[300px] bg-contain bg-no-repeat bg-[url("@/assets/img/general/img_kiwi_slice.svg")];
  }
}

// 翻牌效果
.cover,
.back {
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.25s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cover {
  transform: rotatey(0deg);
}
.card-container:hover .cover {
  transform: rotatey(180deg);
}
.back {
  @apply bg-SecPinkColor;
  transform: rotatey(-180deg);
}
.card-container:hover .back {
  transform: rotatey(0deg);
}
</style>
