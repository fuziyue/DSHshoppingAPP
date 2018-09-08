import Vue from 'vue'
import Router from 'vue-router'

//APP刚进入时的图片；
//import IntoImg from '@/page/intoimg'

//一级路由；
//tabbar;
import Index from '@/page/index' //引入首页页面组件；
import Classify from '@/page/classify' //引入分类页面组件；
import Find from '@/page/find' //引入发现页面组件；
import ShoppingCart from '@/page/shoppingcart' //引入购物车页面组件；
import Login from '@/page/login' //引入登录页面组件；

//其它跳转的页面；
import Seek from '@/page/seek' //引入搜索页面组件；
import SeekCommodity from '@/page/seekcommodity' //引入搜索具体商品的页面组件；
import NewsList from '@/page/newslist' //引入新闻列表页面组件；
import NewsDetails from '@/page/newsdetails' //引入新闻详情页面组件；
import NewsDiscounts from '@/page/newsdiscounts' //引入新闻优惠页面组件；
import ZhuceOne from '@/page/zhuceone' //引入注册第一步页面组件；
import ResetPassword from '@/page/resetpassword' //引入重置密码页面组件；
import DshuiXY from '@/page/dshuixy' //引入董事惠协议页面组件；
import WeiXinLogin from '@/page/weixinlogin' //引入微信登录页面组件；

//无需跳转组件；
import Header from '@/components/header' //引入头部搜索组件；
import HeaderClassify from '@/components/headerClassify' //引入分类的头部搜索组件；
import HeaderFind from '@/components/headerFind' //引入发现的头部组件；
import HeaderShoppingcart from '@/components/headerShoppingcart' //引入购物车的头部组件；
import HeaderLogin from '@/components/headerLogin' //引入登录的头部组件；

import FindBox from '@/components/findBox' //引入发现的单个内容组件；
import ShoppingcartContent from '@/components/shoppingcartContent' //引入购物车的内容部分组件；
//import ShoppingcartHint from '@/components/shoppingcartHint'  //引入购物车提示组件；
import Weixin from '@/components/weixin' //引入微信登录组件；
import Tabbar from '@/components/tabbar' //引入底部tab切换组件；

//二级路由；
import tabLeft from '@/components/leftTab/tabLeft' //引入分类商品页面的左边tab切换组件；
import tabLeftA from '@/components/leftTab/tabLeft1' //引入分类商品页面的左边tab切换董事惠热卖内容组件；
import tabLeftB from '@/components/leftTab/tabLeft2' //引入分类商品页面的左边tab切换全球购内容组件；
import tabLeftC from '@/components/leftTab/tabLeft3' //引入分类商品页面的左边tab切换面部分类内容组件；
import tabLeftD from '@/components/leftTab/tabLeft4' //引入分类商品页面的左边tab切换身体护理内容组件；
import tabLeftE from '@/components/leftTab/tabLeft5' //引入分类商品页面的左边tab切换微商爆款内容组件；
import tabLeftF from '@/components/leftTab/tabLeft6' //引入分类商品页面的左边tab切换香水彩妆内容组件；
import tabLeftG from '@/components/leftTab/tabLeft7' //引入分类商品页面的左边tab切换女性护理内容组件；
import tabLeftH from '@/components/leftTab/tabLeft8' //引入分类商品页面的左边tab切换居家用品内容组件；
import tabLeftS from '@/components/leftTab/tabLeft9' //引入分类商品页面的左边tab切换内衣配饰内容组件；
import tabLeftW from '@/components/leftTab/tabLeft10' //引入分类商品页面的左边tab切换清货专区内容组件；

import Goods from '@/components/leftTab/goods' //引入分类商品页面的左边tab切换组件；

Vue.use(Router)

export default new Router({
	routes: [{ //首页的重定向；
			path: '*',
			redirect: '/index'
		},
//		{ //加载APP刚进入时的图片页面组件的路径；
//			path: '/intoimg',
//			name: 'IntoImg',
//			component: IntoImg
//		},
		{ //加载首页页面组件的路径；
			path: '/index',
			name: 'Index',
			component: Index
		},
		{ //加载分类页面组件的路径；
			path: '/classify',
			name: 'Classify',
			component: Classify
		},
		{ //加载发现页面组件的路径；
			path: '/find',
			name: 'Find',
			component: Find
		},
		{ //加载购物车页面组件的路径；
			path: '/shoppingcart',
			name: 'ShoppingCart',
			component: ShoppingCart
		},
		{ //加载登录页面组件的路径；
			path: '/login',
			name: 'Login',
			component: Login
		},
		{ //加载搜索页面组件的路径；
			path: '/seek',
			name: 'Seek',
			component: Seek
		},
		{ //加载搜索具体商品的页面组件的路径；
			path: '/seekcommodity/:id?/:name?/:price?/:imgUrl?',  // 有？时，可以不带很长一串的参数；
			name: 'SeekCommodity',
			component: SeekCommodity
		},
		{ //加载新闻列表页面组件的路径；
			path: '/newslist',
			name: 'NewsList',
			component: NewsList
		},
		{ //加载新闻详情页面组件的路径；
			path: '/newsdetails',
			name: 'NewsDetails',
			component: NewsDetails
		},
		{ //加载新闻优惠页面组件的路径；
			path: '/newsdiscounts',
			name: 'NewsDiscounts',
			component: NewsDiscounts
		},
		{ //加载注册第一步页面组件的路径；
			path: '/zhuceone',
			name: 'ZhuceOne',
			component: ZhuceOne
		},
		{ //加载重置密码页面组件的路径；
			path: '/resetpassword',
			name: 'ResetPassword',
			component: ResetPassword
		},
		{ //加载董事惠协议页面组件的路径；
			path: '/dshuixy',
			name: 'DshuiXY',
			component: DshuiXY
		},
		{ //加载微信登录页面组件的路径；
			path: '/weixinlogin',
			name: 'WeiXinLogin',
			component: WeiXinLogin
		},
		{ //加载董事惠热卖页面组件的路径；
			path: '/classify/tablefta',
			name: 'tabLeftA',
			component: tabLeftA
		},
		{ //加载全球购页面组件的路径；
			path: '/classify/tableftb',
			name: 'tabLeftB',
			component: tabLeftB
		},
		{ //加载面部分类页面组件的路径；
			path: '/classify/tableftc',
			name: 'tabLeftC',
			component: tabLeftC
		},
		{ //加载身体护理页面组件的路径；
			path: '/classify/tableftd',
			name: 'tabLeftD',
			component: tabLeftD
		},
		{ //加载微商爆款页面组件的路径；
			path: '/classify/tablefte',
			name: 'tabLeftE',
			component: tabLeftE
		},
		{ //加载香水彩妆页面组件的路径；
			path: '/classify/tableftf',
			name: 'tabLeftF',
			component: tabLeftF
		},
		{ //加载女性护理页面组件的路径；
			path: '/classify/tableftg',
			name: 'tabLeftG',
			component: tabLeftG
		},
		{ //加载居家用品页面组件的路径；
			path: '/classify/tablefth',
			name: 'tabLeftH',
			component: tabLeftH
		},
		{ //加载内衣配饰页面组件的路径；
			path: '/classify/tablefts',
			name: 'tabLeftS',
			component: tabLeftS
		},
		{ //加载清货专区页面组件的路径；
			path: '/classify/tableftw',
			name: 'tabLeftW',
			component: tabLeftW
		},
		{ //加载页面组件的路径；
			path: '/goods',
			name: 'Goods',
			component: Goods
		},
	]
})