import Vue from 'vue'
import Router from 'vue-router'
import { HOME, HOME_PROJECT_PANEL, HOME_PROJECT_LOAD, HOME_PROJECT } from './name'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: HOME,
      component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue'),
      children: [
        {
          path: 'project/:projectId',
          name: HOME_PROJECT,
          redirect: { name: HOME_PROJECT_PANEL },
          component: () => import(/* webpackChunkName: "project" */ '@/views/home/Project.vue'),
          children: [
            {
              path: '',
              name: HOME_PROJECT_PANEL,
              component: () => import(/* webpackChunkName: "project.panel" */ '@/components/project/Panel.vue')
            },
            {
              path: 'load',
              name: HOME_PROJECT_LOAD,
              component: () => import(/* webpackChunkName: "project.load" */ '@/components/project/Load.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  ]
})
