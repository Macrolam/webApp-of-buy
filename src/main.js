import Vue from 'vue';
import Elema from './App.vue';
import router from './router';
import routerResource from 'vue-resource';

Vue.config.productionTip = false;

Vue.use(routerResource);
/* eslint-disable no-new */
new Vue({
  el: '#elema',
  router,
  template: '<App/>',
  components: {
    App: Elema
  }
});
