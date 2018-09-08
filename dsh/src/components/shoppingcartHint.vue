
<!-- 购物车提示组件 -->
<template>
	<div>
		<section class="shoppingcartHint">
			<div class="hint">
				<div class="hint-box">
					<h2>提示</h2>
					<p>您的购物车没有商品</p>
				</div>
				<button>确定</button>
			</div>
		</section>
	</div>
</template>

<script>
	
</script>

<style scoped lang="less">
/*购物车提示样式*/	
.shoppingcartHint{
	width: 100%;
	height: 100%;
	position: relative;
	top: 0;
	left: 0;
	z-index: 10;
	background: #000000;
	opacity: 0.3;
	.hint{
		width: 540px;
		height: 250px;
		position: absolute;
		left: 50px;
		top: 400px;
		z-index: 15;
		background: #fff;
		border-radius: 30px;
		.hint-box{
			width: 100%;
			height: 160px;
			border-bottom: 1px solid #d8d8d8;
			h2{
				font-size: 30px;
				padding-top: 40px;
				padding-bottom: 14px;
				text-align: center;
			}
			p{
				font-size: 24px;
				text-align: center;
			}
		}
		button{
			width: 100%;
			height: 88px;
			text-align: center;
			line-height: 88px;
			font-size: 30px;
			color: #2d87d3;
		}
	}
}	
	
</style>