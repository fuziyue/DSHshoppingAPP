
<!--首页页面组件-->
<template>
  <div id="index">
  	<!--头部标题组件   这里的值title是显示子组件接收父级传的具体数据-->
    <page-header :title="title" :font="font"></page-header>
    
    <!--轮播图-->
    <swiper :list="bannerList" auto loop :interval='3000' style="width:100%;" height="360px" dots-class="custom-bottom" dots-position="center"></swiper>
    
    <!--跑马灯-->
    <section class="paomadeng-box">
    	<div class="paomadeng-left" @click="goNewsList">NOTICE</div>
	    <marquee>
	      <marquee-item v-for="(i,index) in 5" :key="index"  class="align-middle" @click.native="goNewsDiscounts">全球团购 震撼来袭</marquee-item>
	    </marquee>
    </section>
    
    <!--图文结构组合列表-->
    
    <section class="mun">
    	<div class="mun-box">
    		<i class="fa fa-plus-square"></i>
    		<p>全部</p>
    	</div>
    	<div class="mun-box">
    		<i class="fa fa-suitcase"></i>
    		<p>新品</p>
    	</div>
    	<div class="mun-box">
    		<i class="fa fa-shopping-bag"></i>
    		<p>清货</p>
    	</div>
    	<div class="mun-box">
    		<i class="fa fa-signing"></i>
    		<p>回馈</p>
    	</div>
    	<div class="mun-box">
    		<i class="fa fa-truck"></i>
    		<p>付邮</p>
    	</div>
    </section>
    
    <img src="../assets/bannerB/xinren.png" class="xinren" @click="hint"/>
    
    <!-- 首页每一个商品的内容组件 -->
    <index-content :title="item" v-for="(item,index) in indexContentTextList" :key='index'></index-content>
    
  </div>
</template>

<script>
import { Swiper,Marquee,MarqueeItem } from 'vux';  //引入vux各种插件； 

import pageHeader from '@/components/header';  //引入头部搜索组件；
import IndexContent from '@/components/indexcontent';  //引入头部搜索组件；

import IndexContentText from '@/assets/js/indexContentText.js'  //引入assets文件下JS文件里面自己编写的JS数据；
let IndexContentObj = IndexContentText.data;
//console.log(IndexContentText)

export default {
  name: 'Index',
  components:{//注入要使用的插件；
  	pageHeader,
  	Swiper,
  	Marquee, 
  	MarqueeItem,
  	IndexContent
  },
  data () {
    return {
    	//数据代理；
      bannerList:[],
      munList: [
      	{munColor:["fa-plus-square","fa-suitcase","fa-shopping-bag","fa-signing","fa-truck"]},
      	{munText:["全部","新品","清货","回馈","付邮"]}
      ],
      title:"注册",//这个title是写在本页面使用组件的具体数据，用来传给子组件的；
      font:"fa fa-qrcode",
      indexContentTextList:'',
    }
  },
  methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    },
    goNewsDiscounts(){  //跳转新闻优惠页面；
    	this.$router.push({path:'/newsdiscounts'});
    },
    goNewsList(){  //跳转新闻列表页面；
    	this.$router.push({path:'/newsList'});
    },
    hint(){  //提示用户是否登录账号,未登录就跳转到登录页面；
    	alert("想加入，请登录");
    	this.$router.push({path:'/login'});
    }
    
  },
  created(){ //元素创建之后执行的方法；
  	
  	// 轮播图的数据的静态渲染；
  	this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/9-10.html').then(data=>{
  		//console.log(data);
  		let arr = data.live.map(function(item,index){
  			return {
  				url: item.link,
				  img: item.picInfo[0].url,
				  title: item.title
  			}
  		})
  		this.bannerList = arr;
  	});
  	
  	// 首页每一个商品的内容的数据的静态渲染；
  	
  },
  mounted(){ //页面加载之后，数据的载入；
  	this.indexContentTextList = IndexContentObj;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#index{
	background: #f1f1f1;
}

.paomadeng-left{
	width: 25%;
	height: 80px;
	font-size: 25px;
	font-weight: 600;
	line-height: 80px;
	text-indent: 25px;
	float: left;
	border-right: 5px solid #f0f0f0;
	box-sizing: border-box;
}
.vux-marquee{
	width: 75%;
	margin: 10px 0px;
	background: #fff;
	height: 80px;
	.vux-marquee-box{
		li{
			font-size: 25px;
			line-height: 80px;
			text-indent: 20px;
			background: #fff;
		}
	}
}

.mun{
	width: 100%;
	height: 150px;
	overflow: hidden;
	background: #fff;
	.mun-box{
		width: 20%;
		height: 100%;
		float: left;
		i{
			width: 60px;
			height: 60px;
			text-align: center;
			line-height: 60px;
			font-size: 60px;
			color: #000;
			background: #fff;
			border-radius: 60px;
			margin: 25px 0 20px 33px;
		}
		p{
			text-align: center;
			font-size: 24px;
			color: #000;
			font-weight: 600;
		}
	}
}

.xinren{
	width: 100%;
	height: 200px;
	margin-bottom: 20px;
}
</style>