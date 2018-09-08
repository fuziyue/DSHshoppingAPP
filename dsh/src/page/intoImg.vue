
<!-- APP刚进入时显示的图片 -->
<template>
	<div>
		<img src="../assets/dshui.jpg" class="DSHUI" v-show="isImg"/>
	</div>
</template>

<script>
	
export default{
	data(){
		return {
			isImg:true
		}
	},
	methods:{
		
	},
	created(){
		let that = this;
		var w = document.documentElement.offsetWidth || document.body.offsetWidth;
		var h = document.documentElement.offsetHeight || document.body.offsetHeight;
		var DSHUI = document.getElementsByClassName('DSHUI')[0];
		
		setTimeout(function(){
			this.isImg = false;
			that.$router.push({path:'/index'});
		},5000)
	}
}

</script>

<style>
.DSHUI{
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 550;
}	
</style>