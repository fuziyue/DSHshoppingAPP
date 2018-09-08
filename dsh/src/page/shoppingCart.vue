
<!--购物车页面组件-->
<template>
  <div>
   
   <!-- 购物车头部  -->
   <header-shoppingcart></header-shoppingcart>
   
   <!-- 购物车内容 -->
   <shoppingcart-content></shoppingcart-content>
   
   
   
  </div>
</template>

<script>
import HeaderShoppingcart from '@/components/headerShoppingcart'  //引入购物车的头部组件；	
import ShoppingcartContent from '@/components/shoppingcartContent'  //引入购物车的内容部分组件；

export default {
  name: 'ShoppingCart',
  components:{
  	HeaderShoppingcart,
  	ShoppingcartContent
  },
  data () {
    return {
      
    }
  },
  methods:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>