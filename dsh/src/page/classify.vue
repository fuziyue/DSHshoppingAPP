
<!--分类页面组件-->
<template>
  <div class="classify">
  	<!--分类的头部搜索-->
    <header-classify></header-classify>
		
		<!--分类商品品牌内容-->
		<tab-left></tab-left>
		
		
  </div>
</template>

<script>
import { Tabbar,TabbarItem } from 'vux';	

import HeaderClassify from '@/components/headerClassify'  //引入分类的头部搜索组件；
import tabLeft from '@/components/leftTab/tabLeft';  //引入分类商品页面的左边tab切换组件；

export default {
  name: 'Classify',
  components:{
  	Tabbar,
  	TabbarItem,
  	tabLeft,
  	HeaderClassify
  },	
  data () {
    return {
      classifyGoodsBg:false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.classify{
	height: 1044px;
	background: #f4f4f4;
}

</style>