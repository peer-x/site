import { lazy } from 'solid-js'

const routes = [
  {
    path: '/',
    component: lazy(() => import('~/pages/index/index')),
  },
  {
    path: '/*all',
    component: lazy(() => import('~/pages/[...all]')),
  },
]

export default routes
