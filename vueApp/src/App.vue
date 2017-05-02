<template>
  <div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/home">首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/product">产品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/my">我的</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/more">更多</router-link>
      </div>
    </div>
    <!--router-view 标签为点击tab切换内容的时候，对应的内容会出现在该标签内，页面上，该标签只需要一个-->
     <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
	// 这里引入组件
	import home from 'components/home/home.vue'
	import product from 'components/product/product.vue'
	import my from 'components/my/my.vue'
	import more from 'components/more/more.vue'
	
	export default {
  components: {
  'v-home': home,
  'v-product': product,
  'v-my': my,
  'v-more': more
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    position: absolute
    bottom: 0
    left: 0
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
