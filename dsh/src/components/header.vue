
<!--头部标题组件-->
<template>
  <div>
  	
    <x-header :left-options="{showBack:false}" slot="header" class="header">
			<div slot="left" class="QR-code">
				<i :class="font" @click="goBack"></i>
			</div>
			<div class="form">
				<input type="text" placeholder="搜索您喜欢的宝贝" @focus="backSeek"></input>
			</div>
			<div slot="right" id="register">
				<span @click="zhuceOne">{{title}}</span>
			</div>
		</x-header>
		
		<!-- 用来把固定头部定位顶下来的div -->
		<div class="pad-top"></div>
  </div>
</template>

<script>
import {XHeader} from 'vux';  //引入vux各种插件； 

export default {
  components:{
  	XHeader
  },
  props:["title","font"],//这个title是父级index.vue绑定的属性，用于接收父级的；
  data () {
    return {
      
    }
  },
  methods:{
  	//跳转到搜索页面组件；
  	backSeek(){
  		this.$router.push({path:'/seek'})
  	},
  	zhuceOne(){ //跳转到注册第一步页面组件；
  		this.$router.push({path:'/zhuceone'})
  	},
  	//点击返回上一个页面；
		goBack(){
			this.$router.go(-1);
			//store.commit("footcover","flex");
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/*头部搜索样式*/
#register{
	position: absolute;
	top: 15px;
	right: 15px;
	display: block;
	width: 60px;
}
  .header{
  	width: 100%;
  	height: 90px;
  	background: #000;
  	position: fixed;
		top: 0;
		left: 0;
		z-index: 50;
  	.QR-code i{
  		font-size: 50px;
  		color: #fff;
  		position: absolute;
  		left: 20px;
  		top: 5px;
  	}
  	.form{
  		width: 400px;
  		height: 60px;
  		position: absolute;
  		left: 115px;
  		top: 10px;
  		input{
  			width: 100%;
  			height: 100%;
  			border-radius: 10px;
  			font-size: 25px;
  			color: #515151;
  			text-indent: 30px;
  			line-height: 60px;
  		}
  	}
  	.vux-header-right{
  		position: absolute;
  		top: 30px;
  		right: 30px;
  		span{
  			font-size: 30px;
  			color: #fff;
  		}
  	}
  }


.pad-top{
	padding-top: 90px;
}    
</style>