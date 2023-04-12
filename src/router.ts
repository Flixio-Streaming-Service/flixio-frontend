import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        name: "home",
        path: '/',
        component: () => import('./pages/Home.vue')
    },

    {
        name: "movie",
        path: '/movies/:id',
        component: () => import('./pages/Movie.vue')
    },

    {
        name: "search",
        path: '/search',
        component: () => import('./pages/Search.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})