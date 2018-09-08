<!--商品品牌分类董事惠热卖组件-->
<template>
	<div class="classify">
		<!--分类的头部搜索-->
    	<header-classify></header-classify>
		
		<!--分类商品品牌内容-->
		<tab-left></tab-left>
		
		<!--分类商品品牌具体内容-->
		<section class="smail-box">
			<goods :title="item" v-for="(item,index) in gcList" :key='index'></goods>
		</section>
		
	</div>
</template>

<script>
import HeaderClassify from '@/components/headerClassify'  //引入分类的头部搜索组件；
import tabLeft from '@/components/leftTab/tabLeft';  //引入分类商品页面的左边tab切换组件；
import Goods from '@/components/leftTab/goods'  //引入分类页面里的具体每一件商品的组件；

import OneText from '../../assets/js/oneText.js'  //引入assets文件下JS文件里面自己编写的JS数据；
let GCListA = OneText.gcListA;  //先保存你要的数据对象；
//console.log(OneText)
//console.log(GCList)
export default{
	components:{
		tabLeft,
  		HeaderClassify,
  		Goods
	},
	data(){
		return {
			gcList:'', //保存一下  页面加载之后的数据；
		}
	},
	mounted(){  //页面加载之后，数据的载入；
		this.gcList = GCListA;
	}
}
	
</script>

<style scoped lang="less">
.classify{
	height: 1044px;
	background: #f4f4f4;
}
.smail-box{
	position: absolute;
	right: 0;
	top: 90px;
	width: 420px;
}	
	
</style>