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
    <nav class="aside-menu" :class="isMenuOpen && 'aside-menu-active'" >
        <div class="aside-menu-logo">
            <img :src="logo" alt="left-side-logo"/>
        </div>
        <div class="aside-menu-links">
            <router-link 
            v-for="link in menu"
            :key="link.to"
            :to="link.to"
            :class="[route.path === link.to && 'aside-menu-link-active','aside-menu-link']"
            >
                <component 
                    :is="route.path === link.to ? link.activeIcon : link.icon" 
                    :class="['icon', route.path === link.to && 'animate-pulse']" 
                />
            </router-link>
        </div>
    </nav>
    <div 
        class="burger-menu"
        @click="menuHandler()"
        >
       <component :is="isMenuOpen ? XMarkIcon : Bars3Icon" class="burger-menu-icon" />
    </div>
</template>

<style scoped>
    .aside-menu {
        display: block;
        height: 100vh;
        background: var(--movie-black-200);
        transition: left 0.5s ease-in-out;
    }

    .aside-menu-logo {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .aside-menu-logo img {
        width: 80px;
    }

    .aside-menu-links {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        gap: 1.25rem;
        margin-top: 40px;
    }

    .aside-menu-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 0.5rem;
        color: rgb(155, 154, 154);
        transition: background 0.5s ease;
    }

    .aside-menu-link:hover {
        background: var(--movie-black-400);
    }

    .aside-menu-link-active {
        color: white;
        background: var(--movie-black-400);
    }

    .icon {
        height: 1.5rem;
        width: 1.5rem;
    }

    .burger-menu {
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
        display: none;
    }

    .burger-menu-icon {
        width: 2.5rem;
        color: white;
    }

    @media screen and (max-width: 1024px) {
        .aside-menu {
            position: absolute;
            top: 0;
            left: -100px;
            z-index: 999;
        }

        .aside-menu-active {
            left: 0px;
        }

        .burger-menu {
            display: block;
        }
    }
</style>