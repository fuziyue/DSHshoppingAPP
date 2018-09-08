<!--具体每一件商品内容的组件-->
<template>
	<div class="goods" @click="goSeekCommodity">
		<div class="goods-img">
			<img :src="title.imgUrl"/>
		</div>
		<p>{{title.name}}</p>
	</div>
</template>

<script>
	


export default{
	props:["title"],
	data(){
		return {

		}
	},
	methods:{
		goSeekCommodity(){  //点击跳转搜索具体商品的页面；
			//第一种方法：
			//this.$router.push({path:'/seekcommodity/'+this.title.name+'/'+this.title.price+'/'+this.title.imgUrl});  //  （/'+this.title.name） 这个就是那个很长一串的参数；
			
			let na1 = this.title.id;
			let na2 = this.title.name;
			let na3 = this.title.price;
			let na4 = this.title.imgUrl;
			
			this.$router.push({path:'/seekcommodity',query:{na1,na2,na3,na4}});
			
			//第三种方法：
			// this.$router.push({name:'SeekCommodity',params:{na1,na2,na3}});
		}
	}
}

</script>

<style scoped lang="less">
.goods{
	width: 33.33%;
	height: 200px;
	float: left;
}	

.goods-img{
	width: 100%;
	height: 140px;
	padding: 30px;
	box-sizing: border-box;
	img{
		width: 100%;
		height: 100%;
	}
}

p{
	width: 100%;
	height: 60px;
	text-align: center;
	line-height: 60px;
	font-size: 23px;
}
</style>