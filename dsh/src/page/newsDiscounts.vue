
<!-- 新闻优惠页面组件  -->
<template>
	<div>
		
		<!-- 新闻优惠头部（引用登录头部组件） -->
		<header-login :title="title"></header-login>
		
		<!-- 新闻优惠内容(PS：这个很简单，所以用图片偷一下懒，但是真实工作开发一定要用标签去做) -->
		<section class="newsDetails">
			<img src="../assets/index-img/newsD/newsboxs.png"/>
		</section>
		
	</div>
</template>

<script>
import HeaderLogin from '@/components/headerLogin'  //引入登录的头部组件；	

export default{
	data(){
		return {
			title:"新闻优惠",
		}
	},
	components:{
		HeaderLogin
	}
	
}

</script>

<style scoped lang="less">
/*新闻优惠页面样式*/	
.newsDetails{
	width: 100%;
	background: #000000;
	img{
		vertical-align: top;
	}
}

	
</style>