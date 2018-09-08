
<!-- 发现头部组件  -->
<template>
	<div>
		<h2 class="find">发现</h2>
		
		<!-- 用来把固定头部定位顶下来的div -->
		<div class="pad-top"></div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
/*发现头部样式*/
.find{
	width: 100%;
	height: 90px;
	background: #000000;
	color: #fff;
	font-size: 32px;
	text-align: center;
	line-height: 90px;
	font-weight: normal;	
	position: fixed;
	top: 0;
	left: 0;
	z-index: 50;
}	

.pad-top{
	padding-top: 90px;
}
</style>