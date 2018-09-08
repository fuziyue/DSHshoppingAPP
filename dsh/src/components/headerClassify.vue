 <!--分类的头部搜索组件-->
<template>
  <div>
    <div class="form">
		<input type="text" placeholder="搜索您喜欢的宝贝" @focus="backSeek"></input>
	</div>
	
	<!-- 用来把固定头部定位顶下来的div -->
	<div class="pad-top"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
  	//跳转到搜索页面组件；
  	backSeek(){
  		this.$router.push({path:'/seek'})
  	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/*分类商品的头部搜索样式*/
.form{
	width: 100%;
	height: 90px;
	line-height: 100px;
	text-align: center;
	background: #000000;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 50;
	input{
		width: 580px;
		height: 60px;
		font-size: 25px;
		line-height: 60px;
		text-indent: 25px;
		border-radius: 10px;
	}
}


.pad-top{
	padding-top: 90px;
}
</style>
