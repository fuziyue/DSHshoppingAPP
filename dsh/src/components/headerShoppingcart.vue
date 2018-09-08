
<!-- 购物车头部组件 -->
<template>
	<div>
		<h2 class="shopPingCart-box">
		   	购物车
		   	<i class="fa fa-trash-o" @click="delShoppingcart"></i>
		</h2>
		
		<!-- 用来把固定头部定位顶下来的div -->
		<div class="pad-top"></div>
	</div>
</template>

<script>
//import ShoppingcartHint from '@/components/shoppingcartHint'  //引入购物车提示组件；


export default{
	data(){
		return {
			
		}
	},
	methods:{
		//点击删除购物车的商品，如果购物车没有商品会有个提示；
		delShoppingcart(){
			alert("您的购物车没有商品")
		}
	}
}

</script>

<style scoped lang="less">
/*购物车头部样式*/
.shopPingCart-box{
	width: 100%;
	height: 90px;
	text-align: center;
	line-height: 90px;
	font-size: 30px;
	font-weight: normal;
	color: #fff;
	background: #000000;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 50;
	i{
		position: absolute;
		right: 35px;
		bottom: 20px;
		font-size: 50px;
	}
}	

.pad-top{
	padding-top: 90px;
}	
</style>