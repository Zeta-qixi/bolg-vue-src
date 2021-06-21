
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'


//创建 router 实例 
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: HomePage},

  ]
})

router.addRoute({
  path: '/about',
  name:'about',
  component: ()=>import('./components/LEDControler.vue')})
