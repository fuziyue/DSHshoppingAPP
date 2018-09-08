<template>
  <div id="app">
    <!--布局容器-->
    <view-box>
    	
    	<!--显示主体内容-->
    	<router-view></router-view>
    	
    	<!--底部导航栏样式-->
    	<tabbar></tabbar>
    	
    </view-box>
  </div>
</template>

<script>
import {ViewBox} from 'vux';  //引入vux各种插件； 

import Tabbar from '@/components/tabbar'  //引入底部tab切换组件；

export default {
  name: 'App',
  components:{
  	ViewBox,
  	Tabbar
  },
  data(){
  	return {
  		
  	}
  },
  methods:{

  },
  computed:{

  }
}
</script>

<style lang="less">
html,body{
	overflow-x: hidden;
}

#app {
	height: 100%;
  background: #fff;
}

</style>
