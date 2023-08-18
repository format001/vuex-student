import { createApp } from 'vue'
import App from './components/App.vue'
import store from './store'


const app  = createApp(App).use(store)

app.mount('#app');
