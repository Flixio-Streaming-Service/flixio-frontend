<script lang="ts" setup>


    defineProps<{
        title?: string
    }>()
</script>

<template>
    <section class="bg-movie-black flex h-full min-w-0 flex-1 flex-col">
        <div class="mx-4 my-9 flex justify-between">
            <h1 v-if="title" class="text-4xl font-weight-900 font-bold text-white">
                {{title}}
            </h1>
            <h1 v-else>
                <slot name="title" />
            </h1>
            <div>
                <slot name="header" />
            </div>
        </div>
        <div class="mx-4 h-full overflow-y-auto">
            <slot />
        </div>
    </section>
</template>