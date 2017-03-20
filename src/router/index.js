import Vue from 'vue';
/*
* 这个名字取决node_modules里的vue-router里的package.json里的name属性
*/
import Router from 'vue-router';
import sellerCon from '../components/sellerCon/sellerCon.vue';
import goodsCon from '../components/goodsCon/goodsCon.vue';
import ratingsCon from '../components/ratingsCon/ratingsCon.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/seller',
      component: sellerCon
    },
    {
      path: '/goods',
      component: goodsCon
    },
    {
      path: '/ratings',
      component: ratingsCon
    }
  ]
});
