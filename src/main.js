import Vue from 'vue'
import axios from 'axios'
import ViewUI from 'view-design'
import ElementUI from 'element-ui'
import App from './App'
import store from './store'
import router from './router'
import EleUploadImage from "vue-ele-upload-image";
import '../node_modules/view-design/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css';
import './permission'

Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(ElementUI);
Vue.component(EleUploadImage.name, EleUploadImage);


Vue.prototype.$axios = axios

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})