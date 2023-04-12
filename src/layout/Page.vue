<script lang="ts" setup>


    defineProps<{
        title?: string
    }>()
</script>

<template>
    <section class="page-section">
        <h1 v-if="title" class="page-title">
            {{title}}
        </h1>
        <h1 v-else>
            <slot name="title" />
        </h1>
        <div>
            <slot name="header" />
        </div>
        <div class="page-content">
            <slot />
        </div>
    </section>
</template>

<style scoped>
    .page-section {
        display: flex;
        height: 100%;
        flex-direction: column;
        margin: 20px 30px 10px 30px;
    }

    .page-title {
        color: white;
        font-size: 38px;
        font-weight: bold;

    }

    .page-content {
        height: 100vh;
        overflow-y: auto;
    }

    @media screen and (max-width: 800px) {
        .page-section {
            margin: 20px 8px 10px 8px;
        }
    }
</style>