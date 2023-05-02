import { createApp } from "vue";
import App from "./App.vue";
// * MY IMPORTS
import "./assets/main.css";
import "./assets/global.css";
import router from './router'



const app = createApp(App).use(router).mount("#app");
