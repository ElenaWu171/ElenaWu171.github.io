<script>
import comp_card_pic_l from "@/components/branch_room/comp_card_pic_l.vue";
import img_tem7 from "@/assets/img/general/img_tem7.jpg";
import img_tem8 from "@/assets/img/general/img_tem8.jpg";
import img_tem9 from "@/assets/img/general/img_tem9.jpg";
import img_tem10 from "@/assets/img/general/img_tem10.jpg";
import img_tem11 from "@/assets/img/general/img_tem11.jpg";
export default {
  data() {
    return {
      card_order: 0,
      branch_room: [
        {
          branch_room_names: "精緻雙人房",
          branch_room_headcount: "2-3人",
          branch_room_type: "雙床",
          branch_room_size: "約6坪",
          branch_room_floor: "木頭地板",
          branch_room_bathroom: "乾溼分離",
          branch_room_window: "依房型",
          branch_room_extra_persons: "不可加人",
          branch_room_img: [img_tem7, img_tem8, img_tem9, img_tem10, img_tem11],
        },
        {
          branch_room_names: "豪華套房",
          branch_room_headcount: "2-4人",
          branch_room_type: "大床",
          branch_room_size: "約7坪",
          branch_room_floor: "瓷磚地板",
          branch_room_bathroom: "整體浴室",
          branch_room_window: "有窗",
          branch_room_extra_persons: "可加人",
          branch_room_img: [img_tem8, img_tem9, img_tem10, img_tem11, img_tem7],
        },
        {
          branch_room_names: "單人房",
          branch_room_headcount: "1人",
          branch_room_type: "單床",
          branch_room_size: "約5坪",
          branch_room_floor: "木頭地板",
          branch_room_bathroom: "乾溼分離",
          branch_room_window: "有窗",
          branch_room_extra_persons: "不可加人",
          branch_room_img: [img_tem9, img_tem10, img_tem11, img_tem7, img_tem8],
        },
        {
          branch_room_names: "家庭房",
          branch_room_headcount: "3-5人",
          branch_room_type: "雙床/單床",
          branch_room_size: "約8坪",
          branch_room_floor: "瓷磚地板",
          branch_room_bathroom: "整體浴室",
          branch_room_window: "無窗",
          branch_room_extra_persons: "可加人",
          branch_room_img: [img_tem10, img_tem11, img_tem7, img_tem8, img_tem9],
        },
        {
          branch_room_names: "商務套房",
          branch_room_headcount: "2人",
          branch_room_type: "大床",
          branch_room_size: "約6坪",
          branch_room_floor: "木頭地板",
          branch_room_bathroom: "乾溼分離",
          branch_room_window: "有窗",
          branch_room_extra_persons: "不可加人",
          branch_room_img: [img_tem11, img_tem7, img_tem8, img_tem9, img_tem10],
        },
        {
          branch_room_names: "景觀套房",
          branch_room_headcount: "2人",
          branch_room_type: "大床",
          branch_room_size: "約7坪",
          branch_room_floor: "瓷磚地板",
          branch_room_bathroom: "整體浴室",
          branch_room_window: "有窗",
          branch_room_extra_persons: "不可加人",
          branch_room_img: [img_tem7, img_tem8, img_tem9, img_tem10, img_tem11],
        },
      ],
    };
  },
  components: { comp_card_pic_l },
  methods: {},
};
</script>
<template>
  <div class="all">
    <div class="top">
      <div class="title">房型說明</div>
      <div class="content">
        桃園中壢車站店共有16間房，包含6人房、4人房、2人房，男女獨立宿舍、混和宿舍等。
      </div>
    </div>
    <div class="bottom">
      <comp_card_pic_l
        class="mb-[40px]"
        v-for="(item, index) in branch_room"
        :key="item.id"
        :change_branch_room_img="item.branch_room_img"
        :change_branch_room_index="index % 2 === 0 ? 0 : 1"
      >
        <template v-slot:branch_room_names>
          {{ item.branch_room_names }}
        </template>
        <template v-slot:branch_room_headcount>
          {{ item.branch_room_headcount }}
        </template>
        <template v-slot:branch_room_type>
          {{ item.branch_room_type }}
        </template>
        <template v-slot:branch_room_size>
          {{ item.branch_room_size }}
        </template>
        <template v-slot:branch_room_floor>
          {{ item.branch_room_floor }}
        </template>
        <template v-slot:branch_room_bathroom>
          {{ item.branch_room_bathroom }}
        </template>
        <template v-slot:branch_room_window>
          {{ item.branch_room_window }}
        </template>
        <template v-slot:branch_room_extra_persons>
          {{ item.branch_room_extra_persons }}
        </template>
      </comp_card_pic_l>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.all {
  @apply flex flex-col justify-center items-center;
  .top {
    @apply w-[100%] h-[162px] flex flex-col justify-between items-center  mt-[176px];
    .title {
      @apply text-desktopLgTitle  font-semibold;
    }
    .content {
      @apply text-desktopBodyText;
    }
  }
  .bottom {
    @apply mt-[120px] mb-[120px];
  }
}
</style>
