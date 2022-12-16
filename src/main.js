import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import axios from 'axios'
import "./assets/bootstrap.bundle.min.js";
import "./assets/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
const app = createApp(App);

app.use(router);
// app.use(axios)

app.mount("#app");
