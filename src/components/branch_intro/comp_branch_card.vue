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
      <!-- <div class="card_t"></div> -->
      <div class="card_b">
        <div class="title">
          <slot name="title">桃園中壢車站店</slot>
        </div>
        <div class="tel"><slot name="tel">03-1234567</slot></div>
        <div class="address">
          <slot name="address">桃園市中壢區新興路286號7</slot>
        </div>
      </div>
    </div>
    <div class="card back">
      <button class="more" type="button">
        <RouterLink to="/branch_detail">更多</RouterLink>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  @apply flex flex-col   items-center w-[30%] h-[673px] rounded-[1000px] bg-mainBrownColor p-[25px] text-baseWhiteColor mt-[30px] shadow-[0_0px_0px_5px_rgba(139,72,46,0.5)];
  //   .fuzzy-border {
  //   width: 200px;
  //   height: 200px;
  //   background-color: #fff; /* 设置背景颜色 */
  //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 添加阴影，模拟毛绒效果 */
  //   border-radius: 10px; /* 可选，添加圆角 */
  // }
  .card_t {
    @apply h-[80%] w-[80%] rounded-[1000px] mb-[20px];
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
    .address {
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
  // .back_img {
  //   @apply w-[100%] h-[100%] bg-cover bg-no-repeat bg-[url("@/assets/img/general/img_kiwi_slice.svg")];
  // }
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
.card-container {
  @apply flex justify-center items-center;
}
.card-container:hover .cover {
  transform: rotatey(180deg);
}
.back {
  @apply bg-[url("@/assets/img/general/img_kiwi_slice.svg")] bg-cover bg-center;
  transform: rotatey(-180deg);
}
.card-container:hover .back {
  transform: rotatey(0deg);
}
</style>
