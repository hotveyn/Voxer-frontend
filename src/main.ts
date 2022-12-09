import { createApp } from 'vue'
import './assets/css/style.css'
import {createPinia} from "pinia";
import router from "@/routes/router";
import App from './App.vue'

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app')
