<template>
  <header class="header">
    <div class="top-wrapper">
      <div class="logo">
        <img :src="sellerData.avatar" width="64" height="64">
      </div>
      <div class="con">
        <div class="tit">
          <span class="brand"></span>
          <span class="name">{{sellerData.name}}</span>
        </div>
        <p class="description">{{sellerData.description}}/{{sellerData.deliveryTime}}分送达</p>
        <p class="supports">
          <span class="icon" v-bind:class="classMap[sellerData.supports[2].type]"></span>
          <span class="text">{{sellerData.supports[2].description}}</span>
        </p>
        <!--如果sellerData.supports存在就显示supConunt标签-->
        <div v-if="sellerData.supports" class="supConunt">
          <span>{{sellerData.supports.length}} 个 ></span>
          <i class=".icon-keyboard_arrow_right"></i>
        </div>
      </div>
    </div>
    <div class="bot-wrapper">
      <p>{{sellerData.bulletin}}</p>
    </div>
    <div class="bgBlur">
      <img :src="sellerData.avatar" width="100%" height="100%">
    </div>
    <!--采用sticky footer 布局-->
    <div class="cover">
      <div class="cover-wrapper clearfix">
        <div class="cover-main">
          <!--你要展示的内容区域-->
          <p>{{sellerData.bulletin}}</p>
          <p>{{sellerData.bulletin}}</p>
        </div>
      </div>
      <div class="cover-footer">
        <!--字体图标没有搞好-->
        <i class="icon-close">&gt;</i>
      </div>
    </div>

  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      sellerData: {
        type: Object
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  @import "../../common/stylus/mixin.styl"
  .header {
    position: relative;
    height: 134px;
    padding-top: 24px
    background: rgba(7, 17, 27, 0.5);
    box-shadow: 0 -5px 10px #07111b;
    .top-wrapper {
      .logo {
        float: left;
        margin: 0px 16px 18px 24px
      }
      .logo, .logo img {
        width: 64px;
        height: 64px;
        background: #000;
        border-radius 2px;
      }
      .con {
        float: left
        .tit {
          margin-top: 2px;
          .brand {
            display: inline-block;

            width: 30px
            height: 18px
            bg-image('brand');
            background-size: 30px 18px;
            background-repeat: none;
          }
          .name {
            vertical-align: top;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            line-height: 18px;
          }
        }
        .description {
          font-size: 12px;
          line-height: 12px
          padding: 8px 0 10px 0;
        }
        .supports {
          font-size: 10px;
          line-height: 12px;
          .icon {
            width: 12px
            height: 12px
            display: inline-block
            margin-right: 8px
            vertical-align: top
            background-size: 12px 12px
            background-repeat: none
            &.decrease {
              bg-image('decrease_1')
            }
            &.discount {
              bg-image('discount_1')
            }
            &.guarantee {
              bg-image('guarantee_1')
            }
            &.invoice {
              bg-image('invoice_1')
            }
            &.special {
              bg-image('special_1')
            }
          }
        }
        .supConunt {
          height: 24px
          width: 40px
          background: rgba(7, 17, 27, 0.5);
          position: absolute
          right: 10px
          bottom: 72px
          border-radius: 20px
          line-height: 24px
          font-size: 10px
          text-align: center
          /*没生效，待调整*/
          .icon-keyboard_arrow_right {
            font-size: 10px;
            color: #000000;
          }
        }
      }
    }
    .bot-wrapper {
      position: absolute;
      bottom: 0;
      left: 0;
      overflow: hidden;
      height: 28px;
      padding-left: 12px;
      line-height: 28px;
      background: rgba(7, 17, 27, 0.2);
      font-size: 10px;
      p {
        margin-right: 8px;
      }
    }
    .bgBlur {
      width: 100%
      height: 100%
      position: absolute
      left: 0
      top: 0
      z-index: -1
      filter: blur(10px);
    }
    .cover {
      width: 100%
      height: 100%
      position: fixed;
      left: 0
      top: 0
      z-index: 100
      background: rgba(7, 17, 27, 0.8);
      backdrop-filter: blur(5px);
      overflow: auto
      .cover-wrapper {
        min-height: 100%;
        .cover-main {
          padding-bottom: 68px
          margin-top: 64px
        }
      }
      .cover-footer {
        position: relative
        width: 32px
        height: 32px
        margin: -64px auto 0 auto;
        clear: both;
        font-size: 40px;
      }
    }

  }

</style>
