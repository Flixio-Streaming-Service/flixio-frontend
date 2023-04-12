<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import logo from '@assets/logo.png'

</script>

<template>
  <div class="main-app">
    <Sidebar />    
    <main class="main-page">
        <div class="main-logo">
            <img :src="logo" alt="logo"/>
        </div>
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
  </div>
</template>

<style scoped>
.main-app {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.main-logo {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 15px;
}
.main-logo img{
  width: 400px;
}

.main-page {
  background: var(--movie-black);
  width: 100%;
}


@media screen and (max-width: 1024px) {
  .main-logo img{
    width: 200px;
  }
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>