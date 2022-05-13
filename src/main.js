import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
library.add(fas);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
