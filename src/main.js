import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import ResturantList from "@/components/ResturantList";
import CommentList from "@/components/CommentList";
import User from "@/components/User";
import FollowerList from "@/components/FollowerList";
import FolloweeList from "@/components/FolloweeList";

Vue.config.productionTip = false
Vue.prototype.$http= axios

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: ResturantList},
  { path: '/comments/:id', component: CommentList, props: true},
  { path: '/userinfo/:id', component: User, props: true,
    children: [
      { path: 'follower/:id', component: FollowerList, props: true},
      { path: 'followee/:id', component: FolloweeList, props: true}
    ]},
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
