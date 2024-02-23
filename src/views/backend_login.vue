<script>
export default {
  mounted() {
    document.querySelector("footer").style.display = "none";
    document.querySelector("#backend_nav").style.display = "none";
  }
  // 發送API 驗證照號密碼正確性
  ,methods:{
    login_confirm(){
      console.log("發送API給後端驗證");
    }
  },
};
</script>
<template>
  <div class="all">
    <div class="logo"></div>
    <form action="">
      <div class="container">
        <div class="emp_number">
          <div class="title">員工編號</div>
          <input class="text" type="text" required />
        </div>
        <div class="emp_pas">
          <div class="title">密碼</div>
          <input class="password" type="password" required />
        </div>
      </div>
    
      <button type="button" @click=login_confirm()>
        <RouterLink to="/backend_banner_manage">登入</RouterLink>
      </button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.all {
  @apply flex flex-col justify-center items-center h-[100vh];
  .logo {
    @apply w-[361px] h-[65px] bg-[url("@/assets/img/nav/img_logo.png")] bg-contain bg-no-repeat;
  }
  form {
    @apply flex flex-col;
    .container {
      @apply w-[401px] h-[132px] flex flex-col justify-around mt-[81px] text-desktopBackendBodyText;
      .emp_number,
      .emp_pas {
        @apply flex justify-between;
        .title {
          @apply w-[30%];
        }
        .password,
        .text {
          @apply w-[100%] border-[1px] border-x-baseGrayColor rounded-sm;
        }
      }
    }
    button {
      @apply px-[20px] py-[12px] mt-[40px] bg-baseBlackColor text-baseWhiteColor rounded-md;
    }
  }
}
</style>
