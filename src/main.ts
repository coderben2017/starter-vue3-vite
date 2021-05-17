import {createApp} from 'vue'
import App from './App.vue'
import index from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import './index.css'

const app = createApp(App);

(app.config as any).productionTip = false

app.use(index)
app.use(store)
app.use(Antd)

app.mount('#app')
