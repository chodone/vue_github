import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoColor from '@/views/NoColor'
import HappLing from '@/views/HappLing'
import HapploSsome from '@/views/HapploSsome'
import HappLower from '@/views/HappLower'
import NotFound from '@/views/NotFound404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/happeed',
    name: 'NoColor',
    component : NoColor
  },
  {
    path: '/happling',
    name: 'Happling',
    component : HappLing
  },
  {
    path: '/happlossome',
    name: 'HapploSsome',
    component: HapploSsome
  },
  {
    path: '/happlower',
    name: 'HappLower',
    component: HappLower
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound
  },
  {
    path:'*',
    redirect: '/notfound'
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'HapploSsome' && from.name === 'HappLower') {
    alert('이전 진화 단계로 돌아갈 수 없습니다.')
    return
  } else if (to.name === 'Happling' && from.name === 'HapploSsome') {
    alert('이전 진화 단계로 돌아갈 수 없습니다.')
    return
  } else if (to.name === 'NoColor' && from.name === 'Happling') {
    alert('이전 진화 단계로 돌아갈 수 없습니다.')
    return
  } else if (to.name === 'home' && from.name === 'HappLower') {
    alert('Home으로 돌아갑니다!')
  }
  next()
})



export default router
