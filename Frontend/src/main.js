import './assets/theme-assets/css/vendors.css'
import './assets/theme-assets/css/app-lite.css'
import './assets/theme-assets/css/core/menu/menu-types/vertical-menu.css'
import './assets/theme-assets/css/core/colors/palette-gradient.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

// app.use(createPinia())

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(VueSweetalert2);
app.use(pinia)
app.use(router)

app.mount('#app')
