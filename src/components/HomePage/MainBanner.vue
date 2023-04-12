<script setup lang="ts">
import { bannerMock } from '@/mocks/mainBanner';

const bg = `url(${bannerMock.poster})`
</script>

<template>
    <div class="banner">
       <div class="banner-text">
            <h2 class="banner-text-header">{{bannerMock.title}}</h2>
            <p class="banner-text-content">{{bannerMock.plot}}</p>
            <div class="banner-text-info">
                <span>{{bannerMock.year}}</span>
                <span>{{bannerMock.genre}}</span>
                <span>{{bannerMock.duration}}</span>
            </div>
       </div>
    </div>
</template>

<style scoped>
.banner {
    display: flex;
    align-items: end;
    height: 400px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: -4px 7px 31px -8px rgba(0,0,0,0.75);
    cursor: pointer;
    background: linear-gradient(rgb(255 255 255 / 0%), #262c31d9), v-bind(bg);
    background-size: cover;
}

.banner-text {
    color: white; 
}
.banner-text-header {
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 34px;
}
.banner-text-content {
    width: 80%;
    margin-bottom: 10px;
}

.banner-text-info {
    color: rgb(173, 173, 173);
    display: flex;
    gap: 20px;
}
</style>




