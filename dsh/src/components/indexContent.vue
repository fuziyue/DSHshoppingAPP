
<!-- 首页每一个商品的内容组件 -->
<template>
	<div class="index-content">
		<!-- 商品内容的标题 -->
		<div class="index-content-title">
			<h1>{{title.title}}</h1>
			<p>{{title.content}}</p>
		</div>
		
		<!-- 商品内容的图片 -->
		<img :src="title.image"/>
	</div>
</template>

<script>

export default{
	props:["title"],
	data(){
		return {
			
		}
	},
	components:{
		
	},
	methods:{
		
	}
}
</script>

<style scoped lang="less">
/*首页每一个商品的内容样式*/	
.index-content{
	width: 100%;
	padding: 0 20px;
	box-sizing: border-box;
	background: #fff;
	border-bottom: 2px solid #5A5A5A;
	.index-content-title{
		width: 100%;
		height: 160px;
		h1{
			height: 60px;
			line-height: 80px;
			font-size: 30px;
			
		}
		p{
			height: 40px;
			line-height: 40px;
			font-size: 25px;
			color: #5a5a5a;
		}
	}
	img{
		width: 600px;
		height: 337px;
	}
}	
</style>