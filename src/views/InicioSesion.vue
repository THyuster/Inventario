<template>
  <div class="body">
    <section class="form">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <form class="form-inner" @submit.prevent="login">
        <h1>Inicio</h1>
        <div class="inputbox">
          <input type="text" v-model="username" required>
          <label for="">Usuario</label>
        </div>
        <div class="inputbox">
          <input type="password" v-model="password" required>
          <label for="">Contraseña</label>
        </div>
        <div class="forget">
          <label for=""><input type="checkbox" v-model="rememberCredentials">Recordar</label>
          <a href="#">Olvidé la Contraseña</a>
        </div>
        <button type="submit">Iniciar</button>
        <div class="register">
          <p>No tengo una cuenta <a href="#">Regístrate</a></p>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { iniciarSesion } from '@/router';

export default defineComponent({
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      rememberCredentials: false,
    };
  },
  mounted() {
    if (localStorage.getItem('rememberCredentials') === 'true') {
      this.username = localStorage.getItem('savedUsername') || '';
      this.password = localStorage.getItem('savedPassword') || '';
      this.rememberCredentials = true;
    }
  },
  methods: {
    login() {
      if (this.username === 'yuster' && this.password === 'junior123') {
        if (this.rememberCredentials) {
          localStorage.setItem('savedUsername', this.username);
          localStorage.setItem('savedPassword', this.password);
          localStorage.setItem('rememberCredentials', 'true');
        } else {
          localStorage.removeItem('savedUsername');
          localStorage.removeItem('savedPassword');
          localStorage.removeItem('rememberCredentials');
        }
        iniciarSesion();
        this.$router.replace('/home');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    }
  }
});
</script>

<style scoped>
@import '/src/assets/estilosSesion.css';
</style>