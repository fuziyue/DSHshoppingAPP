
<!-- 重置密码页面组件 -->
<template>
	<div>
		
		<!-- 重置密码头部（引用登录头部组件） -->
		<header-login :title="title"></header-login>
		
		<!-- 重置密码内容 -->
		<section class="resetPassword">
			
			<div class="mar">
				<form>
					<input type="text" placeholder="请输入手机号"/>
				</form>
				<form>
					<input type="text" placeholder="请输入图像验证码" class="set1"/>
				</form>
				<form>
					<input type="text" placeholder="请输入验证码" class="set2"/>
					<span @click="sixtyS">获取验证码</span>
				</form>
				<form>
					<input type="password" placeholder="请输入新密码" class="set3"/>
				</form>
				<button @click="confirm">确定</button>
			</div>
			
		</section>
		
	</div>
</template>

<script>
import HeaderLogin from '@/components/headerLogin'  //引入登录的头部组件；

export default{
	data(){
		return {
			title:"重置密码",
		}
	},
	components:{
		HeaderLogin,
	},
	methods:{
		confirm(){
			let inputS = document.querySelectorAll('input');
			
			var parName = /^1\d{10}/;//账户;
			var parPassword = /^\w{6,15}/;//密码；
			
			if (!inputS[0].value.trim()) {//手机号输入框没有值时；
				alert("手机号不能为空");
			}else if(!inputS[3].value.trim()){//密码框没有值时;
				alert("密码不能为空");
			}else if((!inputS[0].value.trim())&&(!inputS[3].value.trim())){//手机号和密码同时没有值；
				alert("手机号和密码不能为空");
			}else if (inputS[0].value.trim()&&inputS[3].value.trim()) {
				
				if (parName.test(inputS[0].value.trim())&&parPassword.test(inputS[3].value.trim())) {//验证手机号和密码；
					alert("登录成功，请稍等");		
				}else{
					alert("登录错误，请再次输入正确的手机号或者密码！");
				}
			}
			
			for (var i=0;i<inputS.length;i++) {  //清空重置密码的所有输入框；
				inputS[i].value = ''; 
			}
			
		},
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
						span.style.color = "#000000";
						span.innerHTML = "获取验证码";
						clearInterval(timer);
					}
					
				},1000)	
			}
			
				
		}

	}
}

</script>

<style scoped lang="less">
/*重置密码页面样式*/
.resetPassword{
	width: 100%;
	background: #fff;
	.mar{
		margin: 50px 32px 0;
		form{
			width: 572px;
			height: 85px;
			border: 2px solid #e7e7e7;
			margin-bottom: 60px;
			input{
				border: none;
				outline: none;
				width: 568px;
				height: 80px;
				color: #e7e7e7;
				text-indent: 15px;
				line-height: 85px;
			}
			span{
				color: #000000;
				font-weight: 600;
				font-size: 30px;
				padding-right:60px;
				display: inline-block;
				height: 85px;
				line-height: 85px;
				float: right;
			}
			.set1{
				width: 305px;
				border-right: 1px solid #e7e7e7;
			}
			.set2{
				width: 305px;
				border-right: 1px solid #e7e7e7;
			}
			.set3{
				background: url(../assets/login-img/eye.png) no-repeat 470px 20px;
				
			}
		}
		form:nth-of-type(4){
			margin-bottom: 130px;
		}
		button{	
			width: 100%;
			height: 90px;
			text-align: center;
			line-height: 90px;
			color: #fff;
			font-size: 30px;
			border-radius: 10px;
			background: #000;
		}
	}
}

</style>