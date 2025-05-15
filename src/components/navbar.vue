<template>
  <main class="main-container">
    <div class="sidebar" :class="{ 'collapsed': !isSidebarOpen }" style="background-color: #333;">
      <div class="sidebar-header"> 
 <button @click="toggleSidebar" class="toggle-btn" style="background-color: red;">
          <i :class="isSidebarOpen ? 'fas fa-chevron-left' : 'fas fa-chevron-right'"></i>
        </button>
        <!-- You can add a logo or title here if desired -->
      </div>
      <div class="sidebar-links" :class="{ 'collapsed': !isSidebarOpen }">
        <router-link to="/home" class="sidebar-link"><i class="fas fa-home"></i> <span>Inicio</span></router-link>
        <router-link to="/Producto" class="sidebar-link"><i class="fas fa-box"></i> <span>Productos</span></router-link>
        <router-link to="/Proveedores" class="sidebar-link"><i class="fas fa-truck"></i> <span>Proveedores</span></router-link>
        <router-link to="/Movimientos" class="sidebar-link"><i class="fas fa-exchange-alt"></i> <span>Movimientos</span></router-link>
        <router-link to="/Estadisticas" class="sidebar-link"><i class="fas fa-chart-bar"></i> <span>Estadísticas</span></router-link>
        <router-link to="/addUser" class="sidebar-link"><i class="fas fa-user-plus"></i> <span>Añadir Usuarios</span></router-link>
      </div>
      <div class="sidebar-bottom-icons">
        <a @click.prevent="viewUserInfo" class="sidebar-icon-link"><i class="fas fa-user"></i></a>
        <a @click.prevent="handleLogout" class="sidebar-icon-link"><i class="fas fa-power-off"></i></a>
      </div>
    </div>
    <div :class="['content', { shifted: isSidebarOpen }]">
      <slot></slot> <!-- Slot for main content -->
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, type RouterLink } from 'vue-router';

const router = useRouter();
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value; 
};

const viewUserInfo = () => {
  // Implement logic to display user information
  console.log("Viewing user info..."); // Placeholder
};

const handleLogout = () => {
  router.push('/InicioSesion');
};
</script>
 
<style scoped>

.navbar-nav a.router-link-exact-active {
  font-weight: bold;
  color: #007bff;
}

/* Sidebar Styles */
.sidebar { 
  top: 0;
  left: 0;  
  height: 100%;
  width: 250px; /* Expanded width */
  min-width: 60px; /* Ensure it's at least this width */
  overflow-x: hidden;
  transition: width 0.3s ease; /* Smooth animation */
  padding-top: 60px; /* Adjust for toggle button */
  color: #fff; /* White text */
  font-family: 'Arial', sans-serif; /* Pleasant typography */
  z-index: 10; /* Ensure it's on top, adjust as needed */
}
 
.sidebar.collapsed {
  width: 60px; /* Collapsed width */ 
}

/* Sidebar Header */
.sidebar-header {
  position: absolute;
}
.toggle-btn:hover {
  color: #fff; /* White text on hover */
  top: 10px;
  right: 10px;
} 

.toggle-btn {
  background: none;
  border: none;
  color: #ccc;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px;
  transition: color 0.3s ease; 
}
.toggle-btn:hover {
  color: #fff; 
}
/* You can add styles for the header if you have a logo or title */


/* Navigation links */
.sidebar-links {
  padding: 10px 15px;
}

.sidebar-links i { margin-right: 10px; } /* Space between icon and text */

.sidebar-link {
  color: #ccc; /* Lighter gray for links */
  text-decoration: none;
  font-size: 1.1rem;
  display: block;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
}

.sidebar-link:hover {
  background-color: #555; /* Slightly lighter gray on hover */
  color: #fff; /* White text on hover */
}

.sidebar-links.collapsed span {
  display: none; /* Hide text in collapsed state */

}
.sidebar-links.collapsed i {
  margin-right: 0; /* Remove margin from icons in collapsed state */
  font-size: 1.5rem; /* Increase icon size in collapsed state */
}
/* Bottom section for user info and logout */
.sidebar-bottom-icons {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 0 15px;
  display: flex;
  justify-content: center; /* Center the icons */
  gap: 20px; /* Space between icons */ 
}

.sidebar.collapsed .sidebar-bottom-icons {
  flex-direction: column; /* Stack icons vertically in collapsed state */
  gap: 10px; /* Adjust gap for vertical stacking */
}
.sidebar-icon-link {
  color: #ccc;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.sidebar-icon-link:hover {
  color: #fff;
}

.logout-btn:hover {
  color: #ff6666; 
}

/* Main content adjustment */
.content {
  overflow-y: auto; /* Add scroll if content overflows */
  padding: 20px; /* Add some padding to the content */
}


</style>