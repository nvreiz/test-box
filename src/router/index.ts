import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// 动态获取所有的app路由
const appRoutesMoudle: Record<string, any> = import.meta.glob('../apps/*/router/index.ts', { eager: true })
const routes: any[] = []

for (const path in appRoutesMoudle) {
  const appRoutes: any[] = appRoutesMoudle[path].default as any
  appRoutes.forEach(ele => routes.push(ele))
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView
    },
    ...routes
  ]
})

export default router
