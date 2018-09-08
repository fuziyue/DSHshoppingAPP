
<!-- 新闻列表里面的具体每一个  通 知 内容组件  -->
<template>
	<div>
		
		<section class="inform-box" @click="goNewsDetails">
			<div>
				<img src="../assets/index-img/inform-img/inform0.png"/>
				<p>DSHUI | 包邮机不可失!</p>
			</div>
		</section>
		
	</div>
</template>

<script>
	
export default{
	methods:{
		goNewsDetails(){  //跳转到新闻详情页面；
			this.$router.push({path:'/newsdetails'})
		}
	}
}

</script>

<style scoped lang="less">
/*新闻列表的通知样式*/
.inform-box{
	width: 100%;
	background: #f5f5f5;
	padding: 20px 20px 0px;
	div{
		width: 600px;
		height: 200px;
		background: #fff;
		position: relative;
		img{float: left;margin: 20px;}
		p{
			height: 200px;
			line-height: 200px;
			float: left;
			color: #000;
			font-size: 30px;	
		}
	}
}
	
</style>