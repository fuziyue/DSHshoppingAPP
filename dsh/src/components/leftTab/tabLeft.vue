<template>
	<nav class="leftTab">
		<router-link to="/classify/tablefta" class="leftTab-box router-link-exact-active">董事惠热卖</router-link>
		<router-link to="/classify/tableftb" class="leftTab-box">全球购</router-link>
		<router-link to="/classify/tableftc" class="leftTab-box">面部分类</router-link>
		<router-link to="/classify/tableftd" class="leftTab-box">身体护理</router-link>
		<router-link to="/classify/tablefte" class="leftTab-box">微商爆款</router-link>
		<router-link to="/classify/tableftf" class="leftTab-box">香水彩妆</router-link>
		<router-link to="/classify/tableftg" class="leftTab-box">女性护理</router-link>
		<router-link to="/classify/tablefth" class="leftTab-box">居家用品</router-link>
		<router-link to="/classify/tablefts" class="leftTab-box">内衣配饰</router-link>
		<router-link to="/classify/tableftw" class="leftTab-box">清货专区</router-link>
	</nav>
</template>

<script>
export default{
	data(){
		return {
			
		}
	}
	
}
	
</script>

<style scoped>
/*分类商品导航栏信息样式*/	
a{
	text-decoration: none;
}	
.leftTab{
	width: 210px;
	height: 100%;
	background: #f4f4f4;
	display: inline-block;
}	

.leftTab-box{
	width: 100%;
	height: 90px;
	float: left;
	line-height: 90px;
	text-align: center;
	color: #000000;
	font-size: 25px;
}

.router-link-exact-active{
	border-left: 10px solid #000000;
	background: #fff;
	font-weight: 600;
	box-sizing: border-box;
}

</style>