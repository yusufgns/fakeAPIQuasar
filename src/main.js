// FILE: main.js

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import './assets/style.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import { Quasar } from 'quasar'
import { createApp } from 'vue'
import router from './router/router.js'

const myApp = createApp(App)
myApp.use(router)
myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
