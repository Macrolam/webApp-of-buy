<template>
  <header>
    <div class="top-wrapper">
      <div class="logo">
        <img :src="sellerData.avatar" width="64" height="64" >
      </div>
      <div class="con">
       <div class="tit">
         <span class="brand"></span>
         <span class="name">{{sellerData.name}}</span>
       </div>
        <p class="description">{{sellerData.description}}/{{sellerData.deliveryTime}}分送达</p>
        <p class="supports">
          <span class="icon"></span>
          <span class="text">{{sellerData.supports[0].description}}</span>
        </p>
      </div>
    </div>
    <div class="bot-wrapper"></div>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      sellerData: {
        type: Object
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
