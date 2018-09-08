
<!-- 微信登录页面  -->
<template>
	<div>
		
		<!-- 微信登录头部（引用登录头部的组件）  -->
		<header-login :isClass="yes" :title="title"></header-login>
		
		<!-- 微信登录内容 -->
		<section class="wx-content">
			<!-- 头像 -->
			<div class="wx-via">
				<img src="../assets/login-img/weixin-img/userVia0.png"/>
				<p>轻熟暖型男</p>
			</div>
			
			<!-- 用户信息输入框 -->
			<div class="userText">
				
				<form>
					<input type="text" placeholder="输入手机号码" @focus="xShow"/>
					<i class="fa fa-close"></i>
				</form>
				<form class="form-hid">
					<input type="password" placeholder="设置密码" @focus="xShow"/>
					<i class="fa fa-close"></i>
				</form>
				<form class="form-hid">
					<input type="text" placeholder="短信..." class="input3"/>
					<span @click="sixtyS">获取验证码</span>
				</form>
				<form class="form-hid">
					<input type="text" placeholder="邀请码"/>
				</form>
				
				<button @click="isBind">绑定</button>
				
				<p>初次登录需绑定您的手机号码。若未注册过董事会员,绑定成功即成功注册。</p>
			</div>
			
		</section>
		
	</div>
</template>

<script>
import HeaderLogin from '@/components/headerLogin'  //引入登录的头部组件；

export default{
	data(){
		return {
			title:"绑定手机号",
			yes:true
		}
	},
	components:{
		HeaderLogin
	},
	mounted(){
//		if(this.$route.path==''){
//			
//		}
    },
    methods:{
    	sixtyS(){ //倒数60秒；
			let span = document.querySelector('span');
			
			var timer = null;
			var n = 60;
				
			if (!timer) {
				timer = setInterval(function(){
					n--;
					span.style.color = "#3ace92";
					span.innerHTML = n+" 秒";
					
					if (n==0) {
						span.style.color = "#3ace92";
						span.innerHTML = "获取验证码";
						clearInterval(timer);
					}
					
				},1000)	
			}
		
		},
    	xShow(){ //输入框获取焦点后，x字体图标出现；
    		let inputS = document.querySelectorAll('input');
    		let iS = document.querySelectorAll('i');
    		
    		if (!inputS[0].value) {
    			iS[1].style.display = 'block';
    		}else if (!inputS[1].value) {
    			iS[2].style.display = 'block';
    		}
    		
    		
    		
    	},
    	isBind(){ //点击绑定按钮；
    		let inputS = document.querySelectorAll('input');
    		let formHidS = document.querySelectorAll('.form-hid');
    		
    		var parName = /^1\d{10}/;   //账户正则;
    		var parPassword = /^\w{6,15}/;  //密码正则；
    		var parNote = /^\d{6}/;  //短信验证码正则；
    		var parInvite = /^\d{6}/;  //邀请码正则；    		
    		
    		if (!inputS[0].value.trim()) { //手机号输入框为空时；
    			alert("请输入正确的手机号");	
    		}else{   //手机号输入框   不为空  时；
    			
    			if (parName.test(inputS[0].value.trim())){ //判断正确的手机号后，显示剩下的form元素;
    				
    				for (var i=0;i<formHidS.length;i++) {
    					formHidS[i].className = "formHidS";
    				}
    				
    				//显示剩下的form元素后，再来输入其它的输入框，再次判断其它输入框的值；
					if(!inputS[1].value.trim()){//密码框没有值时;
						
					}else{ //有密码时；
						
						if (parPassword.test(inputS[1].value.trim())) {
							
							if (parNote.test(inputS[2].value.trim())) {
								
								if (parInvite.test(inputS[3].value.trim())) {
									alert("绑定成功，请稍等");
								} else{
									alert("请在有效的分销商二级域名下注册");
								}
								
							}else{
								alert("验证码为6位数");
							}
								
						}else{
							alert("密码不正确");
						}
						
					}
    				
    			}else{
    				alert("请输入正确的手机号");	
    			}
    			
    		}

    	}
    }
}

</script>

<style scoped lang="less">
/*微信登录页面内容样式*/
.wx-content{
	width: 100%;
	.wx-via{
		width: 100%;
		height: 375px;
		position: relative;
		img{
			position: absolute;
			top: 60px;
			left: 220px;
		}
		p{
			width: 100%;
			font-size: 30px;
			color: #031a3a;
			text-align: center;
			position: absolute;
			left: 0;
			bottom: 55px;
		}
	}
	
	.userText{
		width: 100%;
		padding: 0 60px;
		box-sizing: border-box;
		form{
			width: 100%;
			height: 100px;
			position: relative;
			input{
				border: none;
				outline: none;
				width: 100%;
				height: 100px;
				text-indent: 30px;
				font-size: 30px;
				color: #908f94;
				float: left;
			}
			.input3{
				width: 315px;
			}
			span{
				width: 204px;
				color: #37b97b;
				font-weight: 600;
				font-size: 30px;
				text-indent: 30px;
				height: 100px;
				line-height: 100px;
				float: left;
			}
			i{
				width: 40px;
				height: 40px;
				position: absolute;
				right: 30px;
				top: 30px;
				font-size: 30px;
				color: #fff;
				background: #c2c9d3;
				border-radius: 50%;
				text-align: center;
				line-height: 40px;
				display: none;
			}
		}
		button{
			width: 100%;
			height: 100px;
			text-align: center;
			line-height: 100px;
			color: #fff;
			font-size: 30px;
			background: #32cb79;
			border-radius: 10px;
		}
		p{
			font-size: 30px;
			color: #908f94;
			margin-top: 35px;
		}
	}
}	

.form-hid{
	display: none;
}

.form-show{
	display: block;
}

</style>