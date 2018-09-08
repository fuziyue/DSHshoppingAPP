
<!--底部tab切换组件-->
<template>
  <div>
    
    <tabbar id="tabber" :style="cover">
      <tabbar-item link="/index" selected>
        <i class="fa fa-home" slot="label"></i>
      </tabbar-item>
      <tabbar-item link="/classify">
        <i class="fa fa-th-large" slot="label"></i>
      </tabbar-item>
      <tabbar-item link="/find">
        <i class="fa fa-crosshairs" slot="label"></i>
      </tabbar-item>
      <tabbar-item link="/shoppingCart">
        <i class="fa fa-shopping-cart" slot="label"></i>
      </tabbar-item>
      <tabbar-item link="/login" >
        <i class="fa fa-user-o" slot="label"></i>
      </tabbar-item>
    </tabbar>
    
  </div>
</template>

<script>
import store from '../vuex/store'
import {Tabbar,TabbarItem} from 'vux';  //引入vux各种插件； 

export default {
  components:{
  	Tabbar,
  	TabbarItem,
  	store
  },	
  data () {
    return {
      cover:""
    }
  },
  methods:{
  	
  	
  },
	computed:{
		
	},
	mounted(){
			//console.log(store)
			this.cover=store.state.foot;
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/*底部导航栏样式*/
  .weui-tabbar{
  	position: fixed;
  	left: 0;
  	bottom: 0;
  	height: 98px;
  	border-top:2px solid #b3b3b3;
  	background: #000;
  	.weui-bar__item_on i{
  		color: #42B983;
  	}
  	a{
  		width:20%;
  		height:100%;
  		i{
	  		color: #858585;
	  		font-size: 50px;
	  		margin-top: 25px;
	  	}
  	}
  }
</style>