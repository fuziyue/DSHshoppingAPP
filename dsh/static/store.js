import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

var tableAdminsList=function(pid){// 获取数据库里面的用户信息
//	for(var i=0;i<state.list.length;i++){
//		if(state.list[i].pid==pid||pid==state.list[i].categoryId){
//			state.list[i].count++
//			return ;
//		}
//	}
	state.obj1={};
	axios({
		url:'../../static/json/json01.json',
		method:'get'
	}).then(function(res){
		console.log(res);	
		for(var i=0;i<res.data.length;i++){
			// 组织信息： 服务器给咱们的数据，也不能随便加进去
			if(pid==res.data[i].goods_id){
			
			var obj={
					imgsrc:res.data[i].goods_thumb,
//					imageurl
					miaoshu:res.data[i].name,
					//name
					jiage:res.data[i].shop_price,
					count:1,
					pid:res.data[i].goods_id,
					mingzi:res.data[i].shop_name,
//					categoryId:res.data[i].categoryId,
					zongjia:res.data[i].shop_price
				};
				
				state.total.push(obj.zongjia)
				
				state.list.push(obj); // state里面的数组 就有数据了（当前页的数据） 将请求过来的数据储存
				state.obj1=obj;
				console.log(state.obj1)
				console.log(state.list)
				return;
			
			}
		       
			
		};
		console.log('我整理出来的数据是')
		console.log(state.list)
	})
}

const state={
	
	// table组件的数据
		list:[] ,//容器，装放请求到的当前页面的人员信息
		getList:tableAdminsList,
		idlist:[],
		obj1:{},
		all:0,
		total:[],
		users:'去登陆',
		pass:'',
		foot:{
			display:"flex"
		},
		shu:null,
		zongjia:0
			
}

const mutations={ 
	footcover(state,str){
		state.foot.display=str
	},
	
		add(state,pid){	
			var total=0
			for(var i=0;i<state.list.length;i++){				
				if(state.list[i].pid==pid){
					state.list[i].count++;
					
					state.all=state.list[i].count*state.list[i].jiage
								
				}
				
			}
//			state.total.push(state.all)
			
		},
		min(state,pid){
			
			for(var i=0;i<state.list.length;i++){				
				if(state.list[i].pid==pid){
					state.list[i].count--;					
					if(state.list[i].count<=1){						
						state.list[i].count=1;
						state.all=state.list[i].jiage
						                        
					}
					state.all=state.list[i].count*state.list[i].jiage
				}
			}
			
		},
		getTotal(state){
			console.log(state.list)
			state.zongjia=0;
			for(var i=0;i<state.list.length;i++){
				
				state.zongjia+=state.list[i].count*state.list[i].jiage;
				
			}
				
		}
}

export default new Vuex.Store({
	state,mutations
})

