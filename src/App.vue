<template>
  <div id="app">
    <!--app.vue里需要根元素？待验证，做todolist时貌似是这样的。-->
    <vheader></vheader>
    <ul class="tab">
      <li>商品</li>
      <li>评价</li>
      <li>商家</li>
    </ul>
    <div class="con">{{cont}}</div>
  </div>
</template>


<script type="text/ecmascript-6">
  import header from './components/header/header.vue';
  export default{
    data: function () {
      return {
        headert: 'wo shi tit',
        tabt: 'tab',
        cont: 'con'
      };
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
    font-size: 24px;
  }

  .tab
    display flex;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background: #fff;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    li
      flex 1;
      text-align: center;
      color:rgb(77,85,93);
</style>
