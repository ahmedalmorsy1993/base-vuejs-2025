import './assets/main.css'

import { i18n } from '@/lang'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(i18n).use(router).use(VueQueryPlugin)


app.mount('#app')
