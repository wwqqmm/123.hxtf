import Vue from 'vue'
import Router from 'vue-router'
import One from '../components/one/one.vue'
import Two from '../components/two/two.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/one',
      component: One
    },
    {
      path:'/two',
      component: Two
    },
    {
      path: '/',
      component: One
    },

  ]
})
