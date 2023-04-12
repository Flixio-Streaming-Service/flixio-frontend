<script lang="ts" setup>
import Page from '../layout/Page.vue'

import MainBanner from '@/components/HomePage/MainBanner.vue';
import FlashNews from '@/components/HomePage/FlashNews.vue'

</script>

<template>
    <Page title="Home">     
        <div class="news-section">
            <MainBanner />
            <FlashNews /> 
        </div>
    </Page>
</template>


<style scoped>
.news-section {
    margin-top: 20px;
    display: flex;
    gap: 30px;
}

@media screen and (max-width: 1024px) {
    .news-section {
        flex-wrap: wrap;
    }
}
</style>