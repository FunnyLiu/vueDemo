import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementUI from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementUI)

app.mount('#app')
