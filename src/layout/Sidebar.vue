<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'  
import { menu } from './SideBarMenu'
import logo from '@assets/logo.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'

const route = useRoute()
const isMenuOpen = ref<boolean>(false)

const menuHandler = () => {
    isMenuOpen.value = !isMenuOpen.value
}

</script>

<template>
    <nav :class="`bg-movie-black-200 absolute  transition-all top-0 ${isMenuOpen ? 'left-[0px]' : 'left-[-100px]'} h-full z-20 lg:block lg:static `" >
        <div class="flex justify-center mt-6">
            <img class="w-[85px]" :src="logo" alt="left-side-logo"/>
        </div>
        <div class="relative flex w-30 flex-col p-5 mt-11 gap-5">
            <router-link 
            v-for="link in menu"
            :key="link.to"
            :to="link.to"
            :class="[route.path === link.to ? 'bg-movie-black-400 text-white' : 'text-gray-400 hover:bg-movie-black-400',
                'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
            ]"
            >
                <component 
                    :is="route.path === link.to ? link.activeIcon : link.icon" 
                    :class="['h-6 w-6', route.path === link.to ? 'animate-pulse' : '']" 
                />
            </router-link>
        </div>
    </nav>
    <div 
        class="absolute top-4 right-4 lg:hidden cursor-pointer"
        @click="menuHandler()"
        >
       <component :is="isMenuOpen ? XMarkIcon : Bars3Icon" class=" w-10 text-white" />
    </div>
</template>