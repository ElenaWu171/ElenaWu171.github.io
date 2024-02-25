<script>
// 剩下編輯的url
export default {
  data() {
    return {
      // option中文名稱
      inp_branch_name: "",
      // option代碼(value)
      // inp_branch_name_value: "",
      // option中文名稱
      inp_type: "",
      // option代碼(value)
      // inp_type_value: "",
    // 儲存圖片轉換後的base64
      img_base64:"",
      // 輸入欄位-title
      inp_title: "",
      // 輸入欄位-日期(yyyy-mm-dd)
      inp_date: "",
      // 是否置頂
      inp_to_top: 0,
      // 儲存API回傳的資料
      tableData:[],
      // 判斷是否為新資料
      edit_id:0,
      inp_content:""

      
    };
  },
  methods: {
    // 上傳圖片觸發以函式
    handlechange(e) {
      // 顯示上傳圖片
      this.showImage(e);
      // 獲取圖片名稱
      this.getImageValue(e);
    },
     // 顯示上傳圖片
     showImage(e) {
      // 取得圖片的資料
      const up_load_url = e.target.files[0];
      // 圖片的路徑
      this.$refs.blah.src = URL.createObjectURL(up_load_url);
      console.log(up_load_url);
      // 獲得圖片的base64
      this.imgToBase64(up_load_url)
    },
    // 刪除資料
    del(row) {
      console.log(row);
      fetch(`http://localhost:3001/branch_manage/${row.id}`
          ,{ 
            method:"DELETE",
          })
          .then(res=>res.json())
          .catch(error => console.error('Error:', error))
          // 前台顯示
      this.tableData = this.tableData.filter((item) => {
        return item.id !== row.id;
      });
    },
    // 編輯資料
    edit(row) {
      console.log(row);
      this.inp_branch_name= row.branch_name;
      this.inp_type = row.type;
      this.inp_title = row.title;
      this.inp_date = row.date;
      this.inp_content= row.content;
      // 圖片縮圖
      this.$refs.blah.src = row.base64;
      // 圖片名稱
      this.$refs.up_load_img_name.innerHTML = row.img_name
      //  清除前次上傳時的圖片名稱
      document.querySelector(".inp_img").value = ""
      this.edit_id = row.id
      this.base64 = row.base64
    },
    getRadioValue(e) {
      // console.log("getRadioValue", e.target.id);
      return (this.inp_to_top = e.target.id);
    },

    getImageValue(e) {
      // console.log("getImageValue", e.target.value);
      // getImageValue C:\fakepath\飯店設施1.jpg
      let split_image_value = e.target.value.split("\\");
      // 獲取最後一個字串值為圖片名稱
      this.inp_img_name = split_image_value[split_image_value.length - 1]
      this.$refs.up_load_img_name.innerHTML = this.inp_img_name
      return  this.inp_img_name
    },

    add(edit_id) {
      if (
        (this.inp_branch_name === "") |
        (this.inp_type === "") |
        (this.inp_title === "") |
        (this.inp_content === "") |
        (this.inp_date === "") |
        (this.inp_to_top === "")
      )
        return;
        // 檢查id在tabledata內是否存在，存在-->更新，不存在-->新增
        const data_exist = this.tableData.some(item => Number(item.id) == Number(edit_id))
        if(data_exist){
          // 1. 更新原資料
          console.log("更新原資料");
          let update_obj={
            branch_name:this.inp_branch_name,
            type:this.inp_type,
            title: this.inp_title,
            date: this.inp_date,
            // 上傳圖片的名稱
            img_name: this.inp_img_name,
            // 是否置頂
            to_top: this.inp_to_top,
            // 圖片base64
            base64: this.img_base64,
            content: this.inp_content
          }
          console.log(update_obj);
          // 1-1. 找到要更新的資料
          fetch(`http://localhost:3001/banner_manage/${edit_id}`
          ,{ 
            method:"PUT",
            body:JSON.stringify(update_obj)
          })
          .then(res=>res.json())
          .catch(error => console.error('Error:', error))

        }
        else{
          console.log("新增到資料庫");
         
        // 2. 創建新資料-->把資料發送到資料庫
        // 2-1. 創建新資料
        let new_obj = {  
        // id 赴值
        id: this.tableData.length
          ? Math.max(
              ...this.tableData.map((item) => {
                return item.id;
              })
            ) + 1
          : 1,
            branch_name:this.inp_branch_name,
            type:this.inp_type,
            title: this.inp_title,
            date: this.inp_date,
            // 上傳圖片的名稱
            img_name: this.inp_img_name,
            // 是否置頂
            to_top: this.inp_to_top,
            // 圖片base64
            base64: this.img_base64,
            content: this.inp_content

        };
         // 目前先手動增加資料
         console.log(new_obj);
        this.tableData.push(new_obj);

        // 2-2. 把資料發送到資料庫
        // 遇到問題 --> 資料無法更新回post.json 但post正常運行
        // https://github.com/typicode/json-server/issues/710
        fetch("http://localhost:3001/branch_manage",{
          method:"POST",
          headers: {
              'Content-Type': 'application/json',
            },
          body: JSON.stringify(new_obj),
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data)
          
        })
        .catch(error => {
        console.error('Error:', error);
        });
      
        }
        // 3. 重新渲染介面，要學vuex或Vuex
        // 目前先手動增加資料
        //  4. 清除
        this.clear()
       },
       clear() {
      return (
        (this.inp_branch_name= ""),
        (this.inp_type = ""),
        (this.inp_title = ""),
        (this.inp_content = ""),
        (this.inp_date = ""),
        (this.$refs.blah.src = "none"),
        (this.$refs.imageInput.value = ""),
        (this.$refs.up_load_img_name.innerHTML="圖片名稱")
      );
    },
     // 將圖片轉成base64
     imgToBase64(file){
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>{
        // console.log("base64",reader.result);
        this.img_base64=reader.result
        console.log("產生新的base64");
        };
      reader.onerror = (error)=> {
      console.log('Error: ', error);
   }},
  },
   

  mounted() {
    document.querySelector("footer").style.display = "none";
    document.querySelector("#backend_nav").style.display = "block";
    
    fetch("http://localhost:3001/branch_manage")
    .then((res)=>{
      console.log(res)
      return res.json()})
    .then((data)=>{
      console.log(data)
      return (this.tableData=data)
    })
    .catch((err)=>console.log(err));

    const active = document.querySelectorAll(".el-menu-item")
    active.forEach((item)=>{
      if(item.innerText==="分館介紹管理")
      item.classList.add("is-active");
     
    })

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
          <option value="" disabled>--請選擇--</option>
          <option >桃園中壢車站店</option>
          <option >台中站前一館</option>
          <option >台中站前二館</option>
          <option >台中中正店</option>
          <option >台中成功店</option>
          <option >台中捷運中清店</option>
          <option >台中捷運文心店(逢甲1號店)</option>
          <option >高雄九如店</option>
          <option >高雄車站店</option>
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
          <option value="" disabled>--請選擇--</option>
          <option >附近景點</option>
          <option >媒體曝光</option>
          <option >最新消息</option>
          
        </select>
      </div>
      <div class="inp">
        <div class="title">標題名稱</div>
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
        
        </div>
      
      </div>
      <div class="inp show_up_load">
          <div class="title"> 已上傳圖片</div>
          <div class="up_load_img_box ">
            <img id="blah" src="#" alt="image" ref="blah" />
          <div class="up_load_img_name" ref="up_load_img_name">圖片名稱</div>
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
        <button type="button" @click="add(edit_id)" >送出</button>
        <button type="button" @click="clear">清除</button>
      </div>
    </form>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          label="序號"
          :style="{ minWidth: '10%', maxWidth: '10%' }">
          <!--等同 v-for="(item, index) in items" -->
          <template v-slot="scope">
            {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
          prop="branch_name"
          label="分店名稱"
          :style="{ minWidth: '10%', maxWidth: '10%' }"
        />
        <el-table-column
          prop="type"
          label="類型"
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
          prop="img_name"
          label="圖名"
          :style="{ minWidth: '10%', maxWidth: '10%' }"
        />
        <el-table-column
          prop=""
          label="縮圖"
          :style="{ minWidth: '10%', maxWidth: '10%' }"
        >
        <!-- 讓element+呈現圖片方法 -->
        <template v-slot="scope">
          <img :src="scope.row.base64"/>
        </template>
      </el-table-column>
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
      .inp_branch_name,
      .inp_type,
      .inp_url,
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
