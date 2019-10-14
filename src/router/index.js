import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/reset.css'
import '../assets/css/header.css'

Vue.use(Router)

import Home from '../views/home'
import MPhone from '../views/mPhone'
import Shop from '../views/shop'
import Page_one from '../views/page_one'
import Page_two from '../views/page_two'
import Page_three from '../views/page_three'
import Page_four from '../views/page_four'
import Page_five from '../views/page_five'



export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/Home',component:Home},
    {path:'/MPhone',component:MPhone},
    {path:'/Shop',component:Shop},
    {path:'/Page_one',component:Page_one},
    {path:'/Page_two',component:Page_two},
    {path:'/Page_three',component:Page_three},
    {path:'/Page_four',component:Page_four},
    {path:'/Page_five',component:Page_five},
   
  ]
})
