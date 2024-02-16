<script>
// 剩下編輯的url
export default {
  data() {
    return {
      // option中文名稱
      inp_branch_name: "",
      // option代碼(value)
      inp_branch_name_value: "",
      // option中文名稱
      inp_type: "",
      // option代碼(value)
      inp_type_value: "",
      inp_title: "",
      inp_content: "",
      inp_date: "",
      inp_googlemap_url: "",
      inp_img: "",
      inp_to_top: 0,

      tableData: [
        {
          id: 1,
          inp_branch_name: "桃園中壢車站店",
          inp_branch_name_value: "B0001",
          inp_type: "媒體曝光",
          inp_type_value: "media",
          inp_title: "知名YT推薦",
          inp_content:
            "當地最迷人的民宿，這裡有舒適的空間、獨特的設計和親切的服務。在這片寧靜的角落，你能感受到濃厚的當地風情，品味到每一個精心準備的瞬間。絕對是悠閒假期的完美選擇，一定讓你流連忘返，愛上這片獨特的小天地。",
          inp_date: "2016-05-03",
          inp_googlemap_url: "https://maps.app.goo.gl/wN7w5dQ8nrbAGVdg6",
          inp_img: "龍年恭賀圖.png",
          inp_img_url: "",
          inp_to_top: 0,
        },
      ],
    };
  },
  methods: {
    add() {
      if (
        (this.inp_branch_name === "") |
        (this.inp_type === "") |
        (this.inp_title === "") |
        (this.inp_content === "") |
        (this.inp_date === "") |
        (this.inp_to_top === "")
      )
        return;
      console.log(this.inp_branch_name, this.inp_branch_name, this.inp_title);
      let new_obj = {
        id: this.tableData.length
          ? Math.max(
              ...this.tableData.map((item) => {
                return item.id;
              })
            ) + 1
          : 1,

        inp_branch_name: this.inp_branch_name,
        inp_branch_name_value: this.$refs.inp_branch_name.value,
        inp_type: this.inp_branch_name,
        inp_type_value: this.$refs.inp_type.value,
        inp_title: this.inp_title,
        inp_content: this.inp_content,
        inp_date: this.inp_date,
        inp_googlemap_url: this.inp_googlemap_url,
        inp_img: this.inp_img,
        inp_img_url: this.$refs.blah.src,
        inp_to_top: this.inp_to_top,
      };
      this.tableData.unshift(new_obj);
    },
    clear() {
      return (
        (this.inp_title = ""),
        (this.inp_date = ""),
        (this.$refs.blah.src = "none"),
        (this.$refs.imageInput.value = "")
        // (this.$refs.to_top.value = 0)
      );
    },
    // 刪除資料
    del(row) {
      console.log(row);

      this.tableData = this.tableData.filter((item) => {
        console.log(item.id);
        console.log(row.id);
        return item.id !== row.id;
      });
    },
    edit(row) {
      console.log(row);
      this.inp_branch_name = row.inp_branch_name_value;
      this.inp_type = row.inp_type_value;
      this.inp_title = row.inp_title;
      this.inp_content = row.inp_content;
      this.inp_date = row.inp_date;
      this.inp_googlemap_url = row.inp_googlemap_url;
      this.inp_to_top = row.inp_to_top;
      this.$refs.blah.src = row.inp_img_url;

      // this.$refs.imageInput.value = "C:\\fakepath\\台中成功店.jpg";
      console.log(row.url);
      // console.log("file", this.$refs.imageInput.files);
      // C:\fakepath\台中成功店.jpg
    },
    showImage(e) {
      // 上傳圖片顯示
      const up_loag_url = e.target.files[0];
      this.$refs.blah.src = URL.createObjectURL(up_loag_url);
    },
    handlechange(e) {
      this.showImage(e);
      this.getImageValue(e);
    },

    getRadioValue(e) {
      // return e;
      console.log("getRadioValue", e.target.id);
      return (this.inp_to_top = e.target.id);
    },
    getImageValue(e) {
      console.log("getImageValue", e.target.value);
      // getImageValue C:\fakepath\飯店設施1.jpg
      let split_image_value = e.target.value.split("\\");
      // console.log(split_image_value[split_image_value.length - 1]);
      // 獲取最後一個字串值
      return (this.inp_img = split_image_value[split_image_value.length - 1]);
    },
  },

  mounted() {
    document.querySelector("footer").style.display = "none";
    document.querySelector("#backend_nav").style.display = "block";
  },
};
</script>
<template>
  <div class="all">
    <form action="">
      <div class="inp">
        <label for="branch_name" class="title">分店名稱</label>
        <select
          value=""
          id="inp_branch_name"
          name="inp_branch_name"
          class="inp_branch_name"
          ref="inp_branch_name"
          required
          v-model="inp_branch_name"
        >
          <option value="">--請選擇--</option>
          <option value="B0001">桃園中壢車站店</option>
          <option value="B0002">台中站前一館</option>
          <option value="B0003">台中站前二館</option>
          <option value="B0004">台中中正店</option>
          <option value="B0005">台中成功店</option>
          <option value="B0006">台中捷運中清店</option>
          <option value="B0007">台中捷運文心店(逢甲1號店)</option>
          <option value="B0008">高雄九如店</option>
          <option value="B0009">高雄車站店</option>
        </select>
      </div>
      <div class="inp">
        <div class="title">類型</div>
        <select
          value=""
          id="inp_type"
          name="inp_type"
          class="inp_type"
          ref="inp_type"
          required
          v-model="inp_type"
        >
          <option value="">--請選擇--</option>
          <option value="attraction">附近景點</option>
          <option value="media">媒體曝光</option>
        </select>
      </div>
      <div class="inp">
        <div class="title">標題</div>
        <input
          class="inp_title"
          type="text"
          required
          v-model="inp_title"
          maxlength="20"
        />
      </div>
      <div class="inp">
        <div class="title">內容</div>
        <textarea
          class="inp_content"
          required
          v-model="inp_content"
          rows="5"
          cols="33"
          maxlength="100"
        ></textarea>
      </div>
      <div class="inp">
        <div class="title">上架日期</div>
        <input class="inp_date" type="date" required v-model="inp_date" />
      </div>
      <div class="inp">
        <div class="title">GoogleMap連結</div>
        <input
          class="inp_googlemap_url"
          type="text"
          v-model="inp_googlemap_url"
          maxlength="100"
        />
      </div>
      <div class="inp">
        <div class="title">上傳圖片</div>
        <div class="up_load">
          <input
            ref="imageInput"
            class="inp_img"
            accept="image/*"
            type="file"
            id="imgInp"
            required
            @change="handlechange"
          />
          <img id="blah" src="#" alt="image" ref="blah" />
        </div>
      </div>
      <div class="inp">
        <div class="title">置頂</div>
        <input
          ref="to_top"
          class="inp_to_top"
          type="radio"
          id="true"
          name="to_top"
          value="1"
          @change="getRadioValue"
        />
        <label for="true">是</label><br />
        <input
          ref="to_top"
          class="inp_to_top"
          type="radio"
          id="false"
          name="to_top"
          value="0"
          checked
          @change="getRadioValue"
        />
        <label for="false">否，依照上架日期排序</label><br />
      </div>
      <div class="btns">
        <button type="submit" @click="add" @click.prevent>送出</button>
        <button type="button" @click="clear">清除</button>
      </div>
    </form>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="inp_branch_name"
          label="分店名稱"
          :style="{ minWidth: '10%', maxWidth: '10%' }"
        />
        <el-table-column
          prop="inp_type"
          label="類型"
          :style="{ minWidth: '10%', maxWidth: '10%' }"
        />
        <el-table-column
          prop="inp_title"
          label="標題"
          :style="{ minWidth: '10%', maxWidth: '10%' }"
        />

        <el-table-column
          label="功能"
          :style="{ minWidth: '10%', maxWidth: '10%' }"
        >
          <template #default="{ row }">
            <el-button link type="primary" @click="edit(row)">編輯</el-button>
            <el-button link type="primary" @click="del(row)">刪除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.all {
  @apply flex flex-col items-center w-[calc(100%_-_360px)] bg-[skyblue] ml-[360px] pt-[120px];
  form {
    @apply flex flex-col gap-y-[20px] w-[80%] pb-[60px];
    .inp {
      @apply flex;

      .title {
        @apply w-[20%] text-desktopBodyText;
      }
      .inp_branch_name,
      .inp_type,
      .inp_googlemap_url,
      .inp_title,
      .inp_content,
      .inp_date,
      .inp_img {
        @apply w-[70%] text-desktopBodyText;
      }

      .inp_to_top {
        @apply w-[10%];
      }
      label {
        @apply text-desktopBodyText;
      }

      #blah {
        @apply w-[160px] h-[90px] border-[2px] mt-[20px] border-baseGrayColor;
      }
    }
    .btns {
      @apply flex gap-x-[20px] justify-center pt-[40px];
      button {
        @apply px-[12px] py-[6px] bg-baseBlackColor text-baseWhiteColor text-desktopBodyText rounded-sm;
      }
    }
  }
  .table {
    @apply flex justify-center w-[100%];
    .el-table {
      @apply text-desktopBackendBodyText flex;
      .el-table__header {
      }
    }
  }
}
</style>
