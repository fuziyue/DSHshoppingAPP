
<!-- 新闻详情页面组件  -->
<template>
	<div>
		
		<!-- 新闻详情头部（引用登录头部组件） -->
		<header-login :title="title"></header-login>
		
		<!-- 新闻详情内容部分 -->
		<section class="newsDetailsBox" @click="isErweimaHidden">
		
			<div class="newsD">
				
				<!-- 隐藏的那个二维码盒子 组件 --->
				<erweima-hid-box v-show="isShowAndHid"></erweima-hid-box>
				
				<h1>DSHUI | 包邮机不可失!</h1>
				<p><b>董事惠</b><span @click="isErweimaShow">董事惠</span><i>2018-06-10</i></p>
			</div>
			
			<div><img src="../assets/index-img/newsDetails-img/DSHUI.png"/></div>
			
			<div class="welfare">
				<img src="../assets/index-img/newsDetails-img/newsd0.png" class="welfareImg"/>
				<span>董事惠日福利</span>
				
				<div class="welfareText">
					<p>全场满58元</p>
					<p>享全场包邮</p>
					<p>不限地区哦 （全国各地包邮）</p>
					<p>让我们一起来看看吧</p>
					<img src="../assets/index-img/newsDetails-img/shouzhixia.png"/>
				</div>
			</div>
			
			<div>
				<img src="../assets/index-img/newsDetails-img/newsd1.png"/>
			</div>
			
			<div class="newBusinessOpportunities">
				<p>2018新商机</p>
				<p>一个消费省钱，分享赚钱</p>
				<p>让兼职,全职的你都可以月入过万 0 成本创业项目</p>
				<img src="../assets/index-img/newsDetails-img/bottomerweima.png"/>
			</div>
			
		</section>
		
	</div>
</template>

<script>
import HeaderLogin from '@/components/headerLogin'  //引入登录的头部组件；	
import ErweimaHidBox from '@/components/erweimahidbox'  //引入隐藏的二维码组件；	

export default{
	data(){
		return {
			title:"新闻详情",
			isShowAndHid:false
		}
	},
	components:{
		HeaderLogin,
		ErweimaHidBox
	},
	methods:{
		isErweimaShow(ev){  //点击显示隐藏的二维码；
			this.isShowAndHid = true;	
			
			ev.stopPropagation();
		},
		isErweimaHidden(ev){  //点击二维码以外的地方，隐藏已经显示的二维码；
			let erweimaHid = document.getElementsByClassName('erweima-hid')[0];
			let erweimaHidImg = erweimaHid.getElementsByTagName('img')[0];
			let erweimaHidP = erweimaHid.getElementsByTagName('p')[0];
			
			if(ev.target == erweimaHid){
				this.isShowAndHid = true;
			}else if(ev.target == erweimaHidImg){
				this.isShowAndHid = true;
			}else if(ev.target == erweimaHidP){
				this.isShowAndHid = true;
			}else{
				this.isShowAndHid = false;
			}

			//console.log(ev.target)
		}
	}
}

</script>

<style scoped lang="less">
/*新闻详情样式*/	
.newsDetailsBox{
	width: 100%;
	padding: 0 30px;
	box-sizing: border-box;
	.newsD{
		width: 100%;
		height: 230px;
		position:relative;
		h1{
			height: 130px;
			line-height: 130px;
			font-size: 40px;
		}
		p{
			color: #b3b3b3;
			font-size:28px;
			
			span{
				color: #5b627c;
				margin: 0 25px;
			}
			i{
				font-style: normal;
			}
		}
		
		
	}
	.welfare{
		height: 600px;
		position: relative;
		.welfareImg{
			position: absolute;
			top: 45px;
			left: 43%;
		}
		span{
			font-size: 25px;
			padding: 12px;
			border: 4px solid #ef6e69;
			color: #000000;
			border-radius: 15px;
			position: absolute;
			top: 90px;
			left: 34%;
		}
		.welfareText{
			width: 100%;
			height: 360px;
			position: absolute;
			left: 0;
			bottom: 0;
			p{
				height: 75px;
				line-height: 75px;
				font-size: 26px;
				color: #000000;
				text-align: center;
			}
			p:nth-of-type(3){
				color: #f72540;
			}
			img{
				position: absolute;
				left: 40%;
				bottom: 20px;
			}
		}
	}
	.newBusinessOpportunities{
		width: 100%;
		height: 650px;
		padding-top: 90px;
		box-sizing: border-box;
		position: relative;
		p{
			font-size: 18px;
			color: #000000;
			text-align: center;
			height: 33px;
			line-height: 33px;
		}
		img{
			position: absolute;
			left: 33%;
			bottom: 200px;
		}
	}
	
}

</style>