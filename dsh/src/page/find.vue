
<!--发现页面组件-->
<template>
  <div>
  	<!-- 发现头部  -->
    <header-find></header-find>
    
    <!-- 发现内容  -->
    <find-box></find-box>
    <find-box></find-box>
    
  </div>
</template>

<script>
import HeaderFind from '@/components/headerFind'  //引入发现的头部组件；	
import FindBox from '@/components/findBox'  //引入发现的单个内容组件；

export default {
  name: 'Find',
  components:{
  	HeaderFind,
  	FindBox
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">



</style>