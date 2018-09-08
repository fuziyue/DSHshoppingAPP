
<!-- 新闻列表页面组件  -->
<template>
	<div>
		
		<!-- 新闻列表头部（引用登录头部组件） -->
		<header-login :title="title"></header-login>
		
		<!-- 新闻列表内容部分 -->
		<inform></inform>
		<inform></inform>
		<inform></inform>
		
	</div>
</template>

<script>
import HeaderLogin from '@/components/headerLogin'  //引入登录的头部组件；	
import Inform from '@/components/inform'  //引入登录的头部组件；	

export default{
	data(){
		return {
			title:"新闻列表",
		}
	},
	components:{
		HeaderLogin,
		Inform
	}
	
}	
	
</script>

<style scoped lang="less">
/*新闻列表样式*/	


	
</style>