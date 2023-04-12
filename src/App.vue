<script setup lang="ts">
import Sidebar from './layout/Sidebar.vue';
import logo from '@assets/logo.png'

</script>

<template>
  <div class="flex h-screen flex-col">
    <div class="flex flex-1 overflow-hidden">
      <Sidebar />
      <main class="min-w-0  bg-movie-black">
        <div class="w-full flex justify-center mt-4">
            <img class="w-[200px] lg:w-[400px]" :src="logo" alt="logo"/>
        </div>
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>