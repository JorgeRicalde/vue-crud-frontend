<script setup lang="ts">
import { onMounted } from 'vue';

const handleLogout = () => {
  console.log('Logout');
};

onMounted(() => {
  document.getElementById('toggle-sidebar')?.click();
});
</script>

<template>
  <nav class="main-header navbar navbar-expand navbar-dark opacidad">
    <ul class="navbar-nav">
      <li class="nav-item">
        <div
          id="toggle-sidebar"
          class="nav-link"
          data-widget="pushmenu"
          data-no-transition-after-reload="true"
        >
          <i class="fas fa-bars" />
          <span class="sr-only">Alternar barra de navegación</span>
        </div>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <div class="nav-link" data-widget="fullscreen">
          <i class="fas fa-expand-arrows-alt"></i>
        </div>
      </li>
      <li class="nav-item dropdown user-menu">
        <div class="nav-link dropdown-toggle" data-toggle="dropdown">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"
            class="user-image img-circle elevation-2"
          />
          <span class="d-none d-md-inline">Jorge Ricalde</span>
        </div>

        <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <li class="user-header bg-primary">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"
              class="img-circle elevation-2"
            />
            <p class="m-1">Jorge Ricalde</p>
            <p class="m-1">Admin</p>
          </li>

          <li class="user-footer">
            <button @click="handleLogout" class="btn btn-default btn-flat float-right btn-block">
              <i class="fas fa-sign-out-alt"></i>
              Salir
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
