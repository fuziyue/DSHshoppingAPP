
<!-- 购物车内容组件 -->
<template>
	<section class="shopPingCart-content">
   		<p>您的购物车空空如也</p>
   		<span @click="backIndex">去逛逛</span>
   </section>
</template>

<script>

export default{
	methods:{
		backIndex(){
			// 跳到首页页面浏览商品，改变路由路径;	
			this.$router.push({path:'/index'})
		}
	}
}

</script>

<style scoped lang="less">
/*购物车内容*/
.shopPingCart-content{
	width: 100%;
	height: 945px;
	background: #f1f1f1 url(../assets/shoppingcart-img/shoppingcart-login.png) no-repeat 188px 283px;
	position: relative;
	p{
		width: 100%;
		text-align: center;
		position: absolute;
		bottom: 300px;
		left: 0px;
		font-size: 30px;
		color: #000000;
	}
	span{
		position: absolute;
		bottom: 220px;
		left: 40%;
		font-size: 25px;
		color: #ff0500;
		border: 2px solid #ff0500;
		padding: 10px 20px;
	}
}
</style>