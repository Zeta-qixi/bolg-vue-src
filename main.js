import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'font-awesome/css/font-awesome.min.css' 



import { router } from './route';

  
const app = createApp(App)
app.use(router)

app.mount('#app')


