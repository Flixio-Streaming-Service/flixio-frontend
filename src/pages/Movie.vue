<script lang="ts" setup>
import { ref } from 'vue'
import Page from '../layout/Page.vue';
import { tabsMock } from '@/mocks/tabs';
import Tabs from '@components/UI/Tabs.vue';

const activeTab = ref<string>(tabsMock[0].id)

const onTabChange = (tabId: string) => {
    activeTab.value = tabId
}
</script>

<template>
    <Page title="Movie">
        <div class="tabs-section">
            <Tabs :tabs="tabsMock" :active-tab="activeTab" @on-tab-change="onTabChange"/>
         </div>   
    </Page>
</template>

<style scoped>
.tabs-section {
    margin-top: 15px;
}
</style>