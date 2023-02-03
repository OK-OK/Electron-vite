/*
 * @Author: JL Guan
 * @Date: 2022-04-13 09:09:17
 * @description: file description
 * @LastEditTime: 2023-02-03 11:46:32
 * @FilePath: \electron-vite\src\router\index.ts
 */
import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from "./routes"

const router = createRouter({ history: createWebHashHistory(), routes })

router.beforeEach((to, from, next) => {
  next()
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
