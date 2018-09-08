import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
	
	foot:{
		display:"flex"
	}	
	
}

const mutations={ 
	footcover(state,str){
		state.foot.display=str
	}
}

export default new Vuex.Store({
	state,mutations
})

