
<!-- 搜索具体商品的页面 -->
<template>
	<div>
		
		<!-- 搜索头部（引入header组件） -->
		<page-header :title="title" :font="font"></page-header>
		
		<!-- 价格导航条 -->
		<price-ber></price-ber>
		
		<!-- 具体商品的内容 -->
		<section class="commodity-content">
			<img :src="this.strImgUrl"/>
			<div class="commodity-content-item">
				<p>{{this.strName}}</p>
				<p>
					<span>￥{{this.strPrice}}.00</span>
					<span>{{this.strId}}人付款</span>
				</p>
			</div>
		</section>
		
	</div>
</template>

<script>
import pageHeader from '@/components/header';  //引入头部搜索组件；
import PriceBer from '@/components/priceber';  //引入价格导航条组件；

export default{
	components:{ //注入组件；
		pageHeader,
		PriceBer
	},
	data(){
		return {
			title:"搜索",//这个title是写在本页面使用组件的具体数据，用来传给子组件的；
      		font:"fa fa-chevron-left",
      		strId:'',
      		strName:'',  //获取具体的那个已经保存的数据，需要注入一下才能用于渲染页面；
      		strPrice:'',
      		strImgUrl:''
		}
	},
	created(){  //页面渲染之后执行的函数；
		
		//第一种方法：单用  path 的地址栏  路径   字符串 拼接；
		//var addressBarText = this.$route.path;  //地址栏所有的信息($route是没有方法的，而$router是有方法的)；
		//console.log(addressBarText);
		//var cutData = addressBarText.split('/');  //这个是剪切后拿要的数据参数的信息，并且保存在  cutData 变量里面；
		//this.strName = cutData[2];  //获取具体的那个已经保存的数据，可以用于渲染页面了；
		//console.log(this.strName);
		//this.strPrice = cutData[3];
		//this.strImgUrl = cutData[4];
		
		//第二种方法：用  path 和  query；
		//console.log(this.$route.query);
		this.strId = this.$route.query.na1;
		this.strName = this.$route.query.na2;
		this.strPrice = this.$route.query.na3;
		this.strImgUrl = this.$route.query.na4;
		
		//第三种方法：用name  和   params；
		// console.log(this.$route.query);
		//this.strName = this.$route.params.na1;
		//this.strPrice = this.$route.params.na2;
		//this.strImgUrl = this.$route.params.na3;
	}
	
}
	
</script>

<style scoped lang="less">



/*具体商品的内容的样式*/
.commodity-content{
	width: 100%;
	height: 280px;
	border-bottom: 2px solid #a9a9a9;
	position: relative;
	img{
		width: 200px;
		height: 200px;
		position: absolute;
		top: 40px;
		left: 40px;
	}
	.commodity-content-item{
		width: 360px;
		height: 200px;
		position: absolute;
		right: 0;
		top: 40px;
		p{
			font-size: 25px;
			color: #000000;
			font-weight: 600;
		}
		p:nth-of-type(2){
			position: absolute;
			left: 0;
			bottom: 0;
			span:nth-of-type(2){
				color: #a9a9a9;
				margin-left: 20px;
				font-weight: normal;
			}
		}
	}
}
	
</style>