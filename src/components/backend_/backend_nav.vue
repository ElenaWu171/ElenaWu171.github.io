<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<template>
  <!-- <div class="all">
    <div class="emp_info">
      <div class="img"></div>
      <div class="text">
        <div class="name">Judy</div>
        <div class="position">業務經理</div>
      </div>
    </div>
    <div class="function_btns">
      <ul>
        <li>Banner管理</li>
        <li>分館資訊管理</li>
        <li>住房資訊管理</li>
        <li>最新消息管理</li>
      </ul>
    </div>
    <button type="button">登出</button>
  </div> -->
  <el-row class="tac" id="backend_nav">
    <el-col>
      <el-menu
        active-text-color="#DD7B07"
        background-color="#DDF3FF"
        class="el-menu-vertical-demo menu"
        default-active="2"
        text-color="#000000"
        @open="handleOpen"
        @close="handleClose"
      >
        <div class="emp_info">
          <div class="img"></div>
          <div class="text">
            <div class="name">Judy</div>
            <div class="position">業務經理</div>
          </div>
        </div>
        <RouterLink class="nav_link" to="/backend_banner_manage">
          <el-menu-item index="1">
            <span>Banner管理</span>
          </el-menu-item>
        </RouterLink>
        <el-sub-menu index="2">
          <template #title>
            <span>分館資訊管理</span>
          </template>
          <el-menu-item-group>
            <RouterLink class="nav_link" to="/backend_branch_manage">
              <el-menu-item index="2-1">分館介紹管理</el-menu-item>
            </RouterLink>
            <RouterLink class="nav_link" to="/backend_room_manage">
              <el-menu-item index="2-2">客房資訊管理</el-menu-item>
            </RouterLink>
          </el-menu-item-group>
        </el-sub-menu>
        <RouterLink class="nav_link" to="/backend_news_manage">
          <el-menu-item index="3">
            <span>最新消息管理</span>
          </el-menu-item>
        </RouterLink>
        <button type="button" class="log_out">登出</button>
      </el-menu>
    </el-col>
  </el-row>
</template>

<!-- <style lang="scss" scoped>
.all {
  @apply h-[100vh] w-[320px] fixed top-[0px] left-[0px] bg-[#8CD5FE];
  .emp_info {
    @apply flex justify-around items-center text-[1.25rem];
    .img {
      @apply w-[70px] h-[70px] rounded-[999px] bg-[gray];
    }
  }
  .function_btns {
    ul {
      @apply flex flex-col justify-center items-center gap-[20px] text-desktopBodyText pt-[120px];
    }
  }
}
</style> -->
<style lang="scss" scoped>
.tac {
  .menu {
    @apply fixed h-[100vh] pt-[150px] w-[360px];
    .emp_info {
      @apply flex justify-around items-center text-[1.5rem] py-[60px];
      .img {
        @apply w-[120px] h-[120px] rounded-[999px] bg-[url("@/assets/img/general/profile.jpeg")] bg-cover bg-no-repeat bg-center;
      }
    }
    .log_out {
      @apply absolute bottom-0 bg-baseGrayColor text-[1.5rem] text-baseWhiteColor py-[6px]  w-[100%];
      &:hover {
        @apply bg-baseBlackColor;
      }
    }
  }
  span {
    @apply text-[1.5rem];
  }
  .el-menu-item,
  .el-sub-menu {
    @apply text-[1.25rem]  flex flex-col justify-center items-center;
  }
}
</style>
