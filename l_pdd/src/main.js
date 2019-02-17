import Vue from 'vue'
import App from './App'
import store from './store'

// 引入路由器
import router from './router/index'
import LyTab from 'ly-tab'

//配置字体图标
import '@/common/css/style.css';

//配置mint-ui
import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);

import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);

Vue.use(LyTab);

//配置图片的懒加载
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.jpg'
Vue.use(VueLazyload, {
  loading: 'dist/loading.gif',
});

new Vue({
  el:'#app',
  router,
  store,
  render: h=>h(App)
});
