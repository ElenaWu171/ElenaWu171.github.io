<script>
export default {
  data() {
    return {
      remainingChars: 100,
    };
  },
  components: {},
  methods: {},
};
</script>
<template>
  <!-- 寄送email&傳送到後台 -->
  <div class="all">
    <div class="title" data-aos="fade-up">聯絡我們</div>
    <form action="mailto:elenawu171@gmail.com" data-aos="fade-up">
      <div class="content">
        <div class="name">
          <h3 class="content_title">
            <span>*</span>
            姓名
          </h3>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="1"
            maxlength="10"
          />
        </div>
        <div class="email">
          <h3 class="content_title">E-mail</h3>
          <input
            type="email"
            id="email"
            name="email"
            minlength="1"
            maxlength="30"
          />
        </div>
        <div class="tel">
          <h3 class="content_title"><span>*</span>電話</h3>
          <input
            type="tel"
            id="tel"
            name="tel"
            required
            minlength="5"
            maxlength="20"
          />
        </div>
        <div class="question">
          <h3 class="content_title"><span>*</span>諮詢內容</h3>
          <textarea
            id="textarea"
            name="textarea"
            required
            rows="5"
            cols="20"
            maxlength="100"
          ></textarea>
        </div>
      </div>
      <button type="submit">送出</button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.all {
  @apply flex flex-col  items-center justify-center pt-[176px] pb-[176px];
  .title {
    @apply flex justify-center text-desktopXlTitle  tracking-widest;
  }
  form {
    @apply flex flex-col justify-center items-center  h-[719px] w-[100%] gap-[26px];
    .content {
      @apply flex flex-col gap-[26px] pt-[140px]  w-[80%];
      .name,
      .email,
      .tel,
      .question {
        @apply flex text-desktopTitle w-[100%];
        .content_title {
          @apply w-[20%];
        }
        input,
        textarea {
          @apply w-[80%] border-baseBlackGrayColor border-[1px] rounded-[4px];
        }
      }
      span {
        @apply text-[#dc362e];
      }
    }
    button {
      @apply w-[120px] px-[12px] py-[4px] bg-mainGreenColor text-baseWhiteColor text-desktopTitle rounded-[12px];
    }
  }
}
</style>
