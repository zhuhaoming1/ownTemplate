import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
      {
        path: '/', name: 'index', component: resolve => require(['../components/index'],resolve)
      }
    ]
})

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  if(to.fullPath == '/'){
    next();
  }
})

export default router

