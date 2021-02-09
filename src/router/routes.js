let routes = [
  {
    path: '/',
    component: resolve => require([`@view/index.vue`], resolve),
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => require([`@view/home/index.vue`], resolve),
  },
  {
    path: '/product',
    name: 'product',
    component: resolve => require([`@view/product/index.vue`], resolve),
  },
  {
    path: '/about',
    name: 'about',
    component: resolve => require([`@view/about/index.vue`], resolve),
  },
  {
    path: '*',
    name: 'error',
    component: resolve => require([`@view/error/index.vue`], resolve),
  }
]

export default routes