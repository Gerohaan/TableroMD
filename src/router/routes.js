
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: 'addPedido', component: () => import('pages/AddPedido.vue') },
      { path: 'proveedores', component: () => import('pages/Proveedores.vue') },
      { path: 'remitentes', component: () => import('pages/Remitentes.vue') },
      { path: 'envio', component: () => import('pages/Envio.vue') },
      { path: 'nProducto', component: () => import('pages/NProducto.vue') },
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
