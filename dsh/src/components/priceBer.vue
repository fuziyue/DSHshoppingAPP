
<!-- 价格导航条组件 -->
<template>
	<section class="priceBer">
		<div>默认</div>
		<div>销量
			<i class="fa fa-sort-up topA"></i>
			<i class="fa fa-sort-desc topB"></i>
		</div>
		<div>价格
			<i class="fa fa-sort-up topC"></i>
			<i class="fa fa-sort-desc topD"></i>
		</div>
	</section>
</template>

<script>
</script>

<style scoped lang="less">
/*价格导航条的样式*/
.priceBer{
	width: 100%;
	height: 90px;
	background: #fff;
	border-bottom: 2px solid #a9a9a9;
	overflow: hidden;
	div{
		width: 33.33%;
		height: 100%;
		text-align: center;
		line-height: 90px;
		font-size: 30px;
		color: #838383;
		float: left;
		position: relative;
		i{
			width: 20px;
			height: 15px;
			font-size: 40px;
			position: absolute;
			right: 50px;
		}
		i:nth-of-type(1){
			top: 20px;
		}
		i:nth-of-type(2){
			top: 30px;
		}
	}
	div:nth-of-type(1){
		color: #000000;
	}
}


</style>