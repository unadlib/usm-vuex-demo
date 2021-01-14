import Vue, { createApp } from 'vue'
import { createStore } from 'usm-vuex'
import { Counter } from './counter.service'
import App from './App.vue'

const counter = new Counter()

const store = createStore({
  modules: [counter],
})


const app = createApp(App)

app.config.globalProperties.counter = counter

app.use(store)
app.mount('#app')

