import { createApp } from "vue";
import App from "./App.vue";
import First from "./Pages/First.vue";

import "./assets/main.css";

import MyHeader from "./components/MyHeader.vue";

createApp(First).component("MyHeader", MyHeader).mount("#app");
