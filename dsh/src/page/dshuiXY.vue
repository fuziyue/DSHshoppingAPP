
<!-- 董事惠协议页面组件 -->
<template>
	<div>
		
		<!-- 董事惠协议头部（引用登录头部组件） -->
		<header-login :title="title"></header-login>
		
		<!-- 董事惠协议内容（偷一下懒，没有用标签来渲染字体，真实开发项目需要用标签包裹字体来渲染数据，不然不能复制粘贴页面的字体，而是图片） -->
		<section>
			<img src="../assets/login-img/dshuixy0.png"/>
			<img src="../assets/login-img/dshuixy1.png"/>
			<img src="../assets/login-img/dshuixy2.png"/>
			<img src="../assets/login-img/dshuixy3.png"/>
			<img src="../assets/login-img/dshuixy4.png"/>
			<img src="../assets/login-img/dshuixy5.png"/>
			<img src="../assets/login-img/dshuixy6.png"/>
			<img src="../assets/login-img/dshuixy7.png"/>
			<img src="../assets/login-img/dshuixy8.png"/>
			<img src="../assets/login-img/dshuixy9.png"/>
			<img src="../assets/login-img/dshuixy10.png"/>
			<img src="../assets/login-img/dshuixy11.png"/>
			<img src="../assets/login-img/dshuixy12.png"/>
			<img src="../assets/login-img/dshuixy13.png"/>
		</section>
		
	</div>
</template>

<script>
import HeaderLogin from '@/components/headerLogin'  //引入登录的头部组件；

export default{
	data(){
		return {
			title:"董事惠平台服务协议"
		}
	},
	components:{
		HeaderLogin
	}
}
	
</script>

<style scoped lang="less">
	
</style>