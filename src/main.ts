import { createApp } from 'vue'
// import './style.css'
import "./styles/main.scss";
import App from './App.vue'
import router from './router/index';
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

createApp(App).use(Antd).use(router).mount('#app')
