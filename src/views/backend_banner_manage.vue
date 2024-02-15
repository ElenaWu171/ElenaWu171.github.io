<script>
export default {
  data() {
    return {
      off_footer: true,
    };
  },

  mounted() {
    document.querySelector("footer").style.display = "none";
    document.querySelector("#backend_nav").style.display = "block";
  },
};
</script>
<template>
  <div></div>
</template>
<script></script>
