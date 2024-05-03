<template>
  <main>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" id="home" to="/home">Inicio</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText" ref="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="navbar-brand" to="/Producto">Productos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="navbar-brand" to="/Proveedores">Proveedores</router-link>
            </li>
            <li class="nav-item">
              <router-link class="navbar-brand" to="/Movimientos">Movimientos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="navbar-brand" to="/Estadisticas">Estadisticas</router-link>
            </li>
          </ul>
          <div class="links">
            <router-link class="navbar-brand" id="cerrar_sesion" to="/InicioSesion">Cerrar Sesión</router-link>
          </div>
        </div>
      </div>
    </nav>
  </main>

  
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

defineProps(["mensaje"]);

const navbarCollapse = ref<HTMLElement | null>(null);

onMounted(() => {
  navbarCollapse.value = document.querySelector('#navbarText');
});

onUnmounted(() => {
  navbarCollapse.value = null;
});

const toggleNavbar = () => {
  if (navbarCollapse.value && navbarCollapse.value.classList.contains('show')) {
    navbarCollapse.value.classList.remove('show');
  } else {
    navbarCollapse.value?.classList.add('show');
  }
};
</script>

<style scoped>
.navbar-brand {
  color: #fff;
  font-size: large;
}
#cerrar_sesion {
  color: red;
  font-weight: bold;
}
#home {
  font-size: larger;
}
</style>