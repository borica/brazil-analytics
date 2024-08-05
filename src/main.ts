import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import { qOptions } from './quasar-user-options'

const app = createApp(App)

app.use(Quasar, qOptions)
app.use(createPinia())
app.use(router)

app.mount('#app')
