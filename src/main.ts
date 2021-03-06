import Vue, { createApp } from 'vue'
import App from './App.vue'
import './style/index.css'
import 'element-plus/dist/index.css'
import store from './store'
import VueRouter from '@/router'
import dbHelp from '@/libs/db'
import { focusInput } from '@/libs/ipc'
import '@/components/svgIcon/index'
import SvgIcon from '@/components/svgIcon/index.vue'

const app = createApp(App)

app.use(store)
app.use(VueRouter)
// @ts-ignore 挂载ipcrenderer
// app.config.globalProperties.$ipcRenderer = window?.ipcRenderer

app.component('svg-icon', SvgIcon).mount('#app')

dbHelp((help: any) => {
  // indexedDB create success
  console.log('indexedDB create success', help)
})

focusInput()
