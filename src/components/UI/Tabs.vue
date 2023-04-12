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
        <nav class="tabs">
            <a
                class="tabs-tab"
                :class="tab.id == activeTab && 'active-tab'" 
                v-for="tab in tabs" :key="tab.id"
                @click="emits('onTabChange', tab.id)"
            >
                <span 
                    :class="tab.id == activeTab && 'animate-pulse'"
                >{{tab.emoji}}</span> &nbsp; {{tab.title}}
            </a>
        </nav>
    </div>
</template>


<style scoped>
    .tabs {
        display: flex;
        width: 100%;
        gap: 1rem;
        justify-content: flex-start;
    }

    .tabs-tab {
        background: var(--movie-black-400);
        border-radius: 10px;
        padding: 10px 15px 10px 15px;
        color: white;
        cursor: pointer;
        box-shadow: -2px 3px 11px 1px rgba(0,0,0,0.57);
        transition: background 0.5s ease;
    }

    .tabs-tab:hover {
        background: var(--movie-orange);
    }
    
    .active-tab {
        background: var(--movie-orange);
    }

    @media screen and (max-width: 1024px) {
        .tabs {
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
    }
</style>