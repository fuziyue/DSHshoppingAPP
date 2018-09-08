

<template>
	
	<!-- 隐藏的那个二维码盒子 --->
	<div class="erweima-hid">
		<img src="../assets/index-img/newsDetails-img/DSHUIerweima.png"/>
		<p>董事惠微信号功能介绍</p>
	</div>
	
</template>


<script>
export default{
	data(){
		return {
			
		}
	},
	methods:{
		
	}
}
	
</script>

<style scoped lang="less">
/*隐藏的那个二维码盒子*/
.erweima-hid{
	width: 554px;
	height: 339px;
	position: absolute;
	top: 165px;
	left: 105px;
	z-index: 5;
	background: url(../assets/index-img/newsDetails-img/border.png) no-repeat #fff;
	/*display: none;*/
	img{
		position: absolute;
		top: 75px;
		left: 75px;
	}
	p{
		width: 180px;
		position: absolute;
		top: 120px;
		left: 280px;
		font-size: 33px;
		color: #000000;
	}
}

	
</style>