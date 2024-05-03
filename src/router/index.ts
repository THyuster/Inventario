import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Productos from '@/views/Productos.vue'
import InicioSesion from '@/views/InicioSesion.vue'
import Proveedores from '@/views/Proveedores.vue'
import Movimientos from '@/views/Movimientos.vue'
import Estadisticas from '@/views/Estadisticas.vue'
import Buttons from '@/components/Buttons.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/home', name: 'home', component: HomeView },
    { path: '/Producto', name: 'Producto', component: Productos },
    { path: '/InicioSesion', name: 'InicioSesion', component: InicioSesion },
    { path: '/Proveedores', name: 'Proveedores', component: Proveedores },
    { path: '/Movimientos', name: 'Movimientos', component: Movimientos },
    { path: '/Estadisticas', name: 'Estadisticas', component: Estadisticas },
    { path: '/Buttons', name: 'Buttons', component: Buttons },
  ]
})

let conectado = false; 

router.beforeEach((to, from) => {
  
  if (conectado && to.path === '/InicioSesion') {
    return { path: '/home' }
  }

  if (!conectado && to.path !== "/InicioSesion") {
    return { name: 'InicioSesion' }
  }

})

function iniciarSesion() {
  conectado = true;
}

function cerrarSesion() {
  conectado = false;
}

export default router
export { iniciarSesion, cerrarSesion }