<script lang="ts" setup>
import { ref } from 'vue'
import Page from '../layout/Page.vue'
import Tabs from '@components/UI/Tabs.vue';
import MainBanner from '@/components/MainBanner.vue';
import FlashNews from '@components/FlashNews.vue'
import { tabsMock } from '@/mocks/tabs';
import ContentRow from '@/components/UI/ContentRow.vue';

const activeTab = ref<string>(tabsMock[0].id)

const onTabChange = (tabId: string) => {
    activeTab.value = tabId
}

</script>

<template>
    <Page title="Home">     
            <div>
                <Tabs :tabs="tabsMock" :active-tab="activeTab" @on-tab-change="onTabChange"/>
            </div>
            <ContentRow>          
                <MainBanner />
                <FlashNews /> 
             </ContentRow>
    </Page>
</template>