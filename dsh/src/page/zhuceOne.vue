
<!-- 注册 第一步 页面 -->
<template>
	<div>
		
		<!-- 注册 第一步头部（引用登录组件） -->
		<header-login :title="title"></header-login>
		
		<!-- 注册 第一步内容 -->
		<section class="zhuce">
			<form class="verify">
				<input type="text" placeholder="请输入"/>
				
				<select>
					<option value="邀请码">邀请码</option>
					<option value="招商码">招商码</option>
				</select>
			</form>

			<button @click="isTishi">下一步</button>
		</section>
		
	</div>
</template>

<script>
import HeaderLogin from '@/components/headerLogin'  //引入登录的头部组件；

export default{
	components:{
		HeaderLogin,
	},
	data(){
		return {
			title:"注册  第1步"
		}
	},
	methods:{
		//点击下一步，判断是点击邀请码还是招商码，需提示获取码；
		isTishi(){
			let optionS = document.querySelectorAll('option');
			let inputA = document.querySelector('input');
			
			if (inputA.value.trim() == '') {
				alert("内容不能为空")
			}else {
				
				if(optionS[0].value == '邀请码'){
					alert("请在有效的分销商二级域名下注册")
				}else{
					alert("请输入有效的招商码")
				}
				
			}
			
			inputA.value = ''; //清空邀请码的输入框；
		},
		
	}
}

</script>

<style scoped lang="less">
/*注册 第一步样式*/
.zhuce{
	width: 100%;
	background: #fff;
	.verify{
		width: 572px;
		height: 96px;
		border: 2px solid #000000;
		margin: 90px 32px 220px;
		input{
			border: none;
			outline: none;
			width: 352px;
			height: 94px;
			border-right: 2px solid #000000;
			text-indent: 15px;
			line-height: 96px;
			font-size: 25px;
			color: #c2c2c4;
		}
		select{
			width: 218px;
			height: 100%;
			line-height: 96px;
			text-indent: 38px;
			font-size: 28px;
			color: #000000;
			float: right;
			option{
				background: #000000;
				color: #fff;
				font-size: 28px;
				width: 218px;
				height: 100%;
			}
		}
	}
	button{
		width: 575px;
		height: 95px;
		background: #000000;
		color: #fff;
		font-size: 30px;
		text-align: center;
		line-height: 95px;
		border-radius: 10px;
		margin-left: 30px;
	}
}

</style>