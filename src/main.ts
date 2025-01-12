import { createApp } from 'vue'
import App from './App.vue'
import { registerGlobalComponents } from './components/global'
import './style.css'

const app = createApp(App)
registerGlobalComponents(app)

app.mount('#app')
