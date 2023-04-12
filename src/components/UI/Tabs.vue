<script setup lang="ts">
import { ITab } from '@/types'

    defineProps<{
        tabs: ITab[]
        activeTab: string
    }>()

const emits = defineEmits<{
    (e: "onTabChange", tab: string): void
}>()
</script>

<template>
    <div>
        <nav class="flex gap-2 w-full justify-center flex-wrap lg:gap-4 lg:justify-start">
            <a
            class=" bg-movie-black-400 rounded-lg px-5 py-2 text-white drop-shadow-md hover:bg-movie-orange cursor-pointer"
            :class="tab.id == activeTab && 'bg-movie-orange'" 
            v-for="tab in tabs" :key="tab.id"
            @click="emits('onTabChange', tab.id)"
            >
                <span :class="tab.id == activeTab && 'animate-pulse'">{{tab.emoji}}</span> &nbsp; {{tab.title}}
            </a>
        </nav>
    </div>
</template>