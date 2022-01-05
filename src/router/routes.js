
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: 'addPedido', component: () => import('pages/AddPedido.vue') },
      { path: 'proveedores', component: () => import('pages/Proveedores.vue') },
      { path: 'envio', component: () => import('pages/Envio.vue') },
      //{ path: 'dashboard', component: () => import('pages/Dashboard.vue'), meta: { skeleton: true } },
      //{ path: 'dynamic', component: () => import('pages/Dynamic.vue'), meta: { skeleton: true } }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
