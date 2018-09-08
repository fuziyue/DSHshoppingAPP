<template>
  <div id="" :style="cover">
  	
  	<div class="foot_box" >
  		<div class="nav_one"><router-link to='/home' class='a color'><span class="iconfont">&#xe657;</span>首页</router-link></div>
  		<div class="nav_one" ><router-link to='/bar' class='color a'><span class="iconfont">&#xe6a0;</span>乡情馆</router-link></div>
  		<div class="nav_one" ><router-link to='/shopcar/:num' class='color a'><span class="iconfont">&#xe654;</span>购物车</router-link></div>
  		<div class="nav_one" ><router-link to='/my' class='color a'><span class="iconfont">&#xe660;</span>我的</router-link></div>
  	</div>
  	<div class="fixd">
  		
  	</div>
  </div>
</template>

<script>
	import home from './mian/home'
  import store from '@/vuex/store'
  
	export default {
		store,
		components:{home},
		data(){
			return{
				cover:''
			}
			
		},
		methods:{
			turn(){
				var turn=this.$refs.turn
				
			},
			
		},
		mounted(){
			 this.cover=this.$store.state.foot;
//			var turn=document.getElementsByClassName('nav_one')
//			var router=document.getElementsByClassName('a')
			
//			console.log(router)
//			
//			$('.a').click(function(){				 
//				 $(this).removeClass('color').addClass('action').siblings().removeClass('action')
//			})
				
			
//			for(let i=0;i<turn.length;i++){		
	
//				turn[i].onclick=function(){			
//					this.addClass('action').siblings().removeClass('action')
////					  router[i].classList.remove('color')
////						router[i].classList.add('action')
//					
//				}
//			}
			
		}
		
		
		
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{list-style: none;text-decoration: none;}
.foot_box{
	width:100%;position: fixed;background: #fff;
	height: 149px;bottom: 0;
	border-top: 1px solid #999;
	display: flex;flex-direction: row;
}
.iconfont{padding-left: 90px;}
.nav_one{
	width: 270px;text-align: center;
	line-height: 130px;color: #999;
	font-size: 30px;
}
.nav_one span{
	display: block;
	width: 90px;height: 40px;
	margin: 0;font-size: 50px;
	
}
.color{
	color: #999
}

.fixd{
	width: 100%;height:170px;position: relative;bottom: 0;
}
.router-link-active{
	color: #000;
}

/*.router-link-active{
	color: red;
}*/
</style>
