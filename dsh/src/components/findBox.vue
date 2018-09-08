
<!-- 发现内容的每一个单组件  -->
<template>
	<section class="find-box">
    	<!-- 发现内容头部  -->
    	<div class="find-h">
    		<img src="../assets/find-img/find-h/find-h0.png"/>
    		<p>超值热卖</p>
    		<p>5月前</p>
    		<span>净颜卸妆爱用大推荐</span>
    	</div>
    	
    	<!-- 发现内容中部  -->
    	<div class="find-b">
    		<p class="find-b-text">卸妆胜过保养，残留等于毁容！卸妆容易，卸净不易！卸妆产品五花八门，爆痘、敏感只因有卸妆残留。什么才是好卸妆？不油、不闷痘、无残留、不厚重、温和去除脸部彩妆及污垢的卸妆才是好卸妆！</p>
    		<div class="find-b-imgs">
    			<img src="../assets/find-img/find-b/find-b0.png"/>
    			<img src="../assets/find-img/find-b/find-b1.png"/>
    			<img src="../assets/find-img/find-b/find-b2.png"/>
    		</div>
    		<div class="find-b-i">
    			<img src="../assets/find-img/find-f/find-f0.png"/>
    			<p>不需洪荒之力，轻松卸妆  | 净颜卸妆专场</p>
    		</div>
    	</div>
    	
    	<!-- 发现内容底部  -->
    	<div class="find-f">
    		<i class="fa fa-thumbs-o-up"></i>
    		<span>369</span>
    	</div>
   </section>
</template>

<script>
</script>

<style scoped lang="less">
/*发现每一个内容样式*/
.find-box{
	width: 100%;
	height: 830px;
	border-bottom: 1px solid #efeff1;
	background: #fff;
}

.find-h{
	height: 224px;
	position: relative;
	border-top: 1px solid #efeff1;
	img{
		width: 120px;
		height: 120px;
		position: absolute;
		left: 20px;
		top: 20px;
	}
	
	p{
		width: 490px;
		position: absolute;
		left: 150px;
	}
	p:nth-of-type(1){
		top: 35px;
		font-size: 28px;
		font-weight: 600;
		color: #000;
	}
	p:nth-of-type(2){
		top: 97px;
		font-size: 23px;
		color: #4a4a4a;
	}
	span{
		position: absolute;
		left: 20px;
		bottom: 33px;
		font-size: 23px;
		color: #e1153a;
		border: 2px solid #e71111;
		padding: 5px;
	}
}

.find-b{
	width: 100%;
	height: 830-225-75px;
	padding: 0 20px;
	box-sizing: border-box;
	.find-b-text{
		height: 185px;
		font-size: 25px;
		color: #616161;
	}
	.find-b-imgs{
		height: 208px;
		img{
			width: 190px;
			height: 190px;
			float: left;
		}
		img:nth-of-type(2){
			margin: 0 15px;
		}
	}
	.find-b-i{
		height: 140px;
		background: #f5f5f5;
		position: relative;
		img{
			width: 90px;
			height: 90px;
			position: absolute;
			top: 25px;
			left: 20px;
		}
		p{
			width: 470px;
			position: absolute;
			top: 58px;
			left: 130px;
			font-size: 23px;
			color: #000;
		}
	}
}

.find-f{
	width: 100%;
	height: 75px;
	text-align: right;
	line-height: 75px;
	i{
		font-size: 40px;
		margin-top: 12px;
	}
	span{
		font-size: 25px;
		color: #000;
		margin-right: 22px;
		margin-left: 22px;
	}
}	
	
</style>