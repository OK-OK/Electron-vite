import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import './style'
import { createPinia } from 'pinia'

const app = createApp(App)

setupRouter(app)

app.use(createPinia())
app.mount('#app')
