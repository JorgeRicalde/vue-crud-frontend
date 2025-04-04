<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const items = ref([
  {
    to: '/',
    icon: 'fas fa-fw fa-desktop mx-1',
    name: 'Dashboard',
  },
  {
    to: '/usuarios',
    icon: 'fas fa-fw fa-desktop mx-1',
    name: 'Usuarios',
  },
  {
    to: '/roles',
    icon: 'fas fa-fw fa-desktop mx-1',
    name: 'Roles',
  },
]);
</script>

<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <div class="brand-link">
      <img
        alt="Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"
        class="brand-image img-circle elevation-3"
      />
      <span class="brand-text font-weight-light text-dark h4">
        <b>App</b>
      </span>
    </div>
    <div
      class="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition"
    >
      <div class="os-resize-observer-host observed">
        <div class="os-resize-observer" style="left: 0px; right: auto"></div>
      </div>
      <div class="os-size-auto-observer observed" style="height: calc(100% + 1px); float: left">
        <div class="os-resize-observer"></div>
      </div>
      <div class="os-content-glue" style="margin: 0px -8px; width: 249px; height: 525px"></div>
      <div class="os-padding">
        <div
          class="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid"
          style="overflow: scroll"
        >
          <div class="os-content" style="padding: 0px 8px; height: 100%; width: 100%">
            <nav class="pt-2">
              <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                <li class="nav-item" v-for="(item, idx) in items" :key="idx">
                  <RouterLink :to="item.to" custom v-slot="{ isActive, href, navigate }">
                    <a
                      v-bind="$attrs"
                      :href="href"
                      :class="isActive ? 'nav-link active' : 'nav-link'"
                      @click="navigate"
                    >
                      <i :class="item.icon" />
                      <p>{{ item.name }}</p>
                    </a>
                  </RouterLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div
        class="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"
      >
        <div class="os-scrollbar-track">
          <div
            class="os-scrollbar-handle"
            style="width: 100%; transform: translate(0px, 0px)"
          ></div>
        </div>
      </div>
      <div class="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
        <div class="os-scrollbar-track">
          <div
            class="os-scrollbar-handle"
            style="height: 86.1152%; transform: translate(0px, 80px)"
          ></div>
        </div>
      </div>
      <div class="os-scrollbar-corner"></div>
    </div>
  </aside>
</template>

<style scoped></style>
