<template>
	<div>
		<!-- 搜索头部（引入header组件） -->
		<page-header :title="title" :font="font"></page-header>
		
		<!-- 搜索内容 -->
		<section class="seek-content">
			<!-- 搜索内容头部 -->
			<div class="seek-h cles">
				<span>热门搜索</span>
				<span @click="barter"><i class="fa fa-refresh fa-spin"></i>换一批</span>
			</div>
			
			<!-- 搜索内容中部 -->
			<div class="seek-b cles">
				<span v-for="(item,index) in hufuchanpingTextList" :key='index' :class="{isColor:index%3?false:true}">{{item.title}}</span>
			</div>
			
			<!-- 搜索内容尾部 -->
			<div class="seek-f">
				<p>历史搜索</p>
				<p>清空历史记录</p>
			</div>
			
		</section>
		
	</div>
</template>

<script>
import pageHeader from '@/components/header';  //引入头部搜索组件；

import HufuchanpingText from '@/assets/js/hufuchanping.js'  //引入assets文件下JS文件里面自己编写的JS数据；
let HufuchanpingObj = HufuchanpingText.hotSearchWord.sort(function(){
	return Math.random() - 0.5;
});

export default{
	components:{ //注入组件；
		pageHeader,
	},
	data(){
		return {
			title:"搜索",//这个title是写在本页面使用组件的具体数据，用来传给子组件的；
      		font:"fa fa-chevron-left",
      		hufuchanpingTextList:'',
      		isColor:false,
		}
	},
	methods:{
		barter(){  //点击随机生成不一样的热卖搜索；
			this.hufuchanpingTextList = HufuchanpingObj.sort(function(){
				return Math.random() - 0.5;
			});
			
		}
	},
	mounted(){ //页面加载之后，数据的载入；
	  this.hufuchanpingTextList = HufuchanpingObj;
	}
	
}
	
</script>

<style scoped lang="less">
/*搜索样式*/
.seek-content{
	width:100%;
	height: 100%;
	background: #fff;
	padding: 0px 20px;
	box-sizing: border-box;
	.seek-h{
		height: 100px;
		line-height: 100px;
		span{
			font-size: 26px;
			color: #a9a9a9;
		}
		span:nth-of-type(1){
			float: left;
		}
		span:nth-of-type(2){
			float: right;
		}
		i{
			margin-right: 16px;
		}
	}
	.seek-b{
		span{
			font-size: 24px;
			padding: 17px 25px;
			color: #000000;
			background: #f1f1f1;
			margin: 0 25px 20px 0;
			float: left;
		}
	}
	.seek-f{
		p{
			font-size: 25px;
			height: 80px;
			line-height: 80px;
		}
		p:nth-of-type(1){
			color: #9f9f9f;
			text-align: left;
		}
		p:nth-of-type(2){
			color: #000000;
			text-align: center;
		}
	}
}

.cles:after{
	content: '';
	display: block;
	clear: both;
}	

/*判断搜索内容中部的字体是红色样式*/
.isColor{
	color: #bb2620 !important;
}
</style>