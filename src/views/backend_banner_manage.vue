<script>
// 剩下編輯的url
export default {
  data() {
    return {
      inp_title: "",
      inp_date: "",
      inp_img: "",
      inp_to_top: 0,
      tableData: [
        {
          id: 3,
          title: "龍年恭賀",
          date: "2016-05-03",
          img: "龍年恭賀圖.png",
          to_top: 0,
        },
        {
          id: 2,
          title: "標題 1",
          date: "2016-05-03",
          img: "圖片1.png",
          to_top: 0,
        },
        {
          id: 1,
          title: "標題 2",
          date: "2016-05-03",
          img: "圖片2.png",
          to_top: 0,
        },
      ],
    };
  },
  methods: {
    showImage(e) {
      // 上傳圖片顯示
      const up_loag_url = e.target.files[0];
      this.$refs.blah.src = URL.createObjectURL(up_loag_url);
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
      this.inp_title = row.title;
      this.inp_date = row.date;
      this.$refs.blah.src = row.url;
      // this.$refs.imageInput.value = "C:\\fakepath\\台中成功店.jpg";
      console.log(row.url);
      console.log("file", this.$refs.imageInput.files);
      // C:\fakepath\台中成功店.jpg
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
    add() {
      if (
        (this.inp_title === "") |
        (this.inp_date === "") |
        (this.inp_img === "") |
        (this.inp_to_top === "")
      )
        return;
      let new_obj = {
        id: this.tableData.length
          ? Math.max(
              ...this.tableData.map((item) => {
                return item.id;
              })
            ) + 1
          : 1,
        url: this.$refs.blah.src,
        title: this.inp_title,
        date: this.inp_date,
        img: this.inp_img,
        to_top: this.inp_to_top,
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
        <div class="title">標題名稱</div>
        <input class="inp_title" type="text" required v-model="inp_title" />
      </div>
      <div class="inp">
        <div class="title">上架日期</div>
        <input class="inp_date" type="date" required v-model="inp_date" />
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
          prop="id"
          label="序號"
          :style="{ minWidth: '10%', maxWidth: '10%' }"
        />
        <el-table-column
          prop="title"
          label="標題名稱"
          :style="{ minWidth: '10%', maxWidth: '10%' }"
        />
        <el-table-column
          prop="date"
          label="上架日期"
          :style="{ minWidth: '10%', maxWidth: '10%' }"
        />
        <el-table-column
          prop="img"
          label="圖片"
          :style="{ minWidth: '10%', maxWidth: '10%' }"
        />
        <el-table-column
          prop="to_top"
          label="置頂"
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
      .inp_title,
      .inp_date {
        @apply w-[70%] text-desktopBodyText;
      }
      .inp_img {
        @apply text-desktopBodyText;
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
