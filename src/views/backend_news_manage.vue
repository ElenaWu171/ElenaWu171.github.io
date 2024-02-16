<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    document.querySelector("footer").style.display = "none";
    document.querySelector("#backend_nav").style.display = "block";
    // 取得資料
    // fetch("http://localhost:3000/posts")
    //   .then((response) => {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
    // fetch(
    //   "http://localhost:3000/posts",
    //   // post多增加的部分
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       id: 2,
    //       title: "hell0",
    //       author: "Debby",
    //     }),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
  },
};
</script>
<template>
  <div></div>
</template>
<script></script>
