
<!--登录页面组件-->
<template>
  <div>
  	
  	<!-- 登录头部 -->
  	<header-login :title="title"></header-login>
    
    <!-- 登录内容 -->
    <section class="login-content">
    	<form class="login-box">
    		<input type="text" placeholder="请输入手机号"/>
    		<input type="password" placeholder="请输入密码"/>
    		<p><input type="checkbox" id="tick" :checked="isRun"/>点击注册按钮，代表您已阅读并同意<span @click="dshuiXY">《董事惠协议》</span></p>
    		<button @click="confirm">确认</button>
    		<div class="append cle">
    			<span @click="zhuceOne">注册</span>
    			<span @click="goResetPassword">忘记密码</span>
    		</div>
    	</form>
    	
    	<!-- 微信登录 -->
    	<weixin></weixin>
    	
    </section>
    
  </div>
</template>

<script>
import HeaderLogin from '@/components/headerLogin'  //引入登录的头部组件；
import Weixin from '@/components/weixin'  //引入微信登录组件；
import ZhuceOne from '@/page/zhuceone'  //引入注册第一步页面组件；
import store from "@/vuex/store"

export default {
  name: 'Login',
  components:{
  	HeaderLogin,
  	Weixin,
  	store,
  	ZhuceOne,
  },
  data () {
    return {
      title:"登录",
      isRun:false,
    }
  },
  methods:{
  	//跳转到重置密码页面；
  	goResetPassword(){
  		this.$router.push({path:'/resetpassword'})
  	},
  	dshuiXY(){ //跳转到董事惠协议内容页面的;
  		this.$router.push({path:'/dshuixy'})
  	},
  	zhuceOne(){ //跳转到注册第一步页面组件；
  		this.$router.push({path:'/zhuceone'})
  	},
  	confirm(){
			let inputS = document.querySelectorAll('input');
			
			var parName = /^1\d{10}/;//账户;
			var parPassword = /^\w{6,15}/;//密码；
			
			if (!inputS[0].value.trim()) {//手机号输入框没有值时；
				alert("手机号不能为空");
			}else if(!inputS[1].value.trim()){//密码框没有值时;
				alert("密码不能为空");
			}else if((!inputS[0].value.trim())&&(!inputS[1].value.trim())){//手机号和密码同时没有值；
				alert("手机号和密码不能为空");
			}else if (inputS[0].value.trim()&&inputS[1].value.trim()&&inputS[2].checked==true) { //已阅读董事惠协议，打了勾；
				
				if (parName.test(inputS[0].value.trim())&&parPassword.test(inputS[1].value.trim())) {//验证手机号和密码；
					alert("登录成功，请稍等");		
				}else{
					alert("登录错误，请再次输入正确的手机号或者密码！");
				}
				
			}else if (inputS[0].value.trim()&&inputS[1].value.trim()&&inputS[2].checked==false) {  //未阅读董事惠协议，没打勾；
				alert("请您确认已阅读董事惠协议！！！")
			}
			
			for (var i=0;i<inputS.length;i++) {  //清空重置密码的所有输入框；
				inputS[i].value = ''; 
			}
			
		},
  },
  mounted(){
  		store.commit("footcover","none");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">


/*登录内容样式*/
#tick{
	width: 25px;
	height: 25px;
}
.login-content{
	width: 100%;
	height: 1000px;
	background: #fff;
	padding: 140px 30px 0;
	box-sizing: border-box;
	position: relative;
	.login-box{
		width: 100%;
		input{
			width: 572px;
			height: 85px;
			border: 2px solid #000000;
			font-size: 26px;
			color: #c6c5ca;
			text-indent: 15px;
			line-height: 85px;
		}
		input:nth-of-type(1){
			margin-bottom: 58px;
		}
		
		p{
			margin: 65px 0 55px;
			height: 30px;
			font-size: 22px;
			span{
				color: #177dfb;
				font-weight: 600;
			}
		}
		button{
			width: 100%;
			height: 90px;
			text-align: center;
			line-height: 90px;
			color: #fff;
			font-size: 30px;
			border-radius: 10px;
			background: #000000;
		}
		
		.append{
			width: 100%;
			margin-top: 50px;
			span{
				font-size: 26px;
			}
			span:nth-of-type(1){
				float: left;
			}
			span:nth-of-type(2){
				float: right;
			}
		}
	}
}

.cle:after{
		content: '';
		display: block;
		clear: both;	
}


</style>