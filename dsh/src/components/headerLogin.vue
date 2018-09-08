
<!-- 登录头部组件 -->
<template>
	<div>
		<h2 class="login-h" :class="{WXheader:isClass}">
			<i class="fa fa-chevron-left" @click="goBack"></i>{{title}}
		</h2>
		
		<!-- 用来把固定头部定位顶下来的div -->
		<div class="pad-top"></div>
	</div>
</template>

<script>
import store from "@/vuex/store"

export default{
	props:["title","isClass"],
	data(){
		return {
			
		}
	},
	methods:{
		//点击返回上一个页面；
		goBack(){
			this.$router.go(-1);
			store.commit("footcover","flex");
		}
		
	}
}
	
</script>

<style scoped lang="less">
/*登录头部样式*/
.login-h{
	width: 100%;
	height: 90px;
	background: #000000;
	color: #fff;
	font-size: 32px;
	text-align: center;
	line-height: 90px;
	font-weight: normal;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 50;
	i{
		position: absolute;
		bottom: 23px;
		left: 20px;
		font-size: 40px;
		color: #fff;
	}
}

.pad-top{
	padding-top: 90px;
}


/*微信登录页面样式*/
.WXheader{
	background: #fff;
	color: #000000;
	border-bottom: 1px solid #b3b3b3;
	i{
		color: #000000;
	}
}

</style>