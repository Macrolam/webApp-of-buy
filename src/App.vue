<template>
  <div id="app">
    <!--app.vue里需要根元素？待验证，做todolist时貌似是这样的。-->
    <vheader v-bind:sellerData="seller"></vheader>
    <ul class="tab">
      <li>
        <router-link to="/seller">商品</router-link>
      </li>
      <li>
        <router-link to="/goods">评价</router-link>
      </li>
      <li>
        <router-link to="/ratings">商家</router-link>
      </li>
    </ul>


    <router-view></router-view>
  </div>
</template>


<script type="text/ecmascript-6">
  const ERR_OK = 0;
  import header from './components/header/header.vue';
  export default{
    data: function () {
      return {
        seller: {}
      };
    },
    created: function () { // 在vue对象创建完成但是还没挂载到DOM上时请求数据,在钩子里的this就是指代vue实例
      this.$http.get('/api/seller').then(
        (res) => {
          res = res.body;
          if (res.errno === ERR_OK) {
            this.seller = res.data;
          }
        }
      );
    },
    components: {
      vheader: header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body {
    background: pink;
    color: #fff;
    font-size: 14px;
  }

  .tab
    display flex;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background: #fff;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    li
      flex 1;
      text-align: center;
      color: rgb(77, 85, 93);
</style>
