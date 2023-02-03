/*
 * @Author: JL Guan
 * @Date: 2022-04-13 09:18:32
 * @description: file description
 * @LastEditTime: 2022-12-01 15:47:15
 * @FilePath: \vite-builder\src\router\routes.ts
 */
const children = [
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/modules/hello'),
  },
]

const routes = [
  {
    path: '/main',
    name: 'main',
    component: () => import('@/modules/main'),
    children
  },
  {
    path: '/',
    redirect: '/hello',
  },
]

export default routes
