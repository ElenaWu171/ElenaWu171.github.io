import "./assets/main.css";
import "./assets/index.css";
import "./assets/hover.css";
import "./assets/font.css";
// import "../swiper/css";
// import "./swiper/css/pagination";
// import "./swiper/css/free-mode";
// import "./swiper/css/navigation";
// import "./swiper/css/thumbs";
// import "./style.css";

import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount("#app");
