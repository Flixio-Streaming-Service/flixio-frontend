<script setup lang="ts">
import { bannerMock } from '@/mocks/mainBanner';

const bg = `url(${bannerMock.poster})`
</script>

<template>
    <div class="banner flex w-full h-[400px] p-8 rounded-2xl drop-shadow-xl cursor-pointer lg:basis-2/3">
       <div class="text-white self-end">
            <h2 class="text-4xl mb-2 font-bold">{{bannerMock.title}}</h2>
            <p class="w-[80%]">{{bannerMock.plot}}</p>
            <div class="mt-2 flex gap-2">
                <span>{{bannerMock.year}}</span>
                <span>{{bannerMock.genre}}</span>
                <span>{{bannerMock.duration}}</span>
            </div>
       </div>
    </div>
</template>

<style scoped>
.banner {
    background: linear-gradient(rgb(255 255 255 / 0%), #262c31d9), v-bind(bg);
    background-size: cover;
}
</style>




