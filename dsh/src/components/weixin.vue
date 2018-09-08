
<!-- 微信登录组件 -->
<template>
	<button class="wx" @click="goWeiXin"><i class="fa fa-weixin"></i>微信登录</button>
</template>

<script>
import WeiXinLogin from '@/page/weixinlogin'  //引入微信登录页面组件；

export default{
	components:{
		WeiXinLogin,
	},
	methods:{
		//跳转到微信登录页面;
		goWeiXin(){
			this.$router.push({path:'/weixinlogin'});
		}
	}
}
	
</script>

<style lang="less">
/*微信登录样式*/
.wx{
	width: 435px;
	height: 90px;
	border: 2px solid #59bc48;
	border-radius: 40px;
	background: #fff;
	color: #59bc48;
	font-size: 28px;
	position: absolute;
	left: 15%;
	bottom: 5%;
	i{
		margin-right: 15px;
	}
}
</style>