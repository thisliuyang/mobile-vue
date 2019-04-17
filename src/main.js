import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/css/reset.css'

import '@/lib/mui/css/mui.css'
import '@/lib/mui/css/icons-extra.css'
import dayjs from 'dayjs'
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

Vue.config.productionTip = false

Vue.filter('dateFormat', function (value, format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(value).format(format)
})
Vue.use(MintUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
