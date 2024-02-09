<script>
import comp_general_card from "@/components/general/comp_general_card.vue";
import comp_branch_card from "@/components/branch_intro/comp_branch_card.vue";
export default {
  components: { comp_general_card, comp_branch_card },
};
</script>
<template>
  <div>
    我是首頁
    <div class="h-[3000px]">
      <comp_general_card></comp_general_card>
      <comp_branch_card></comp_branch_card>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
