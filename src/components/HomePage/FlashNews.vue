<script setup lang="ts">
import { ref, computed } from 'vue';
import Stack from '../UI/Stack.vue';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/solid'
import { flashNews } from '@/mocks/news'

const currentSlideIndex = ref<number>(0)
const currentSlide = computed(() => flashNews[currentSlideIndex.value])
const isBackDirection = ref<boolean>(false)

const nextSlide = () => {
    isBackDirection.value = false
    toggleLoading()
    currentSlideIndex.value++
}

const prevSlide = () => {
    isBackDirection.value = true
    toggleLoading()
    currentSlideIndex.value--
}

const loading = ref<boolean>(false)
const toggleLoading = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false   
    }, 300)
}

</script>

<template>
   <div class="flash-back-card">
            <transition :name="!isBackDirection ? 'slide-fade' : 'slide-fade-reverse'">
                <div v-show="!loading" class="flash-card">
                    <div v-if="!loading" >
                        <img 
                        :src="currentSlide.image" 
                        alt="newsImage"
                        class="flash-card-image"
                        />
                        <h2 class="flash-card-hot">🔥 Hot News</h2>
                        <p class="flesh-card-text">{{currentSlide.text}}</p>
                    </div>

                    <div class="flesh-card-footer">
                    <div class="card-footer-content">
                        <div class="card-footer-text">{{currentSlide.date}}</div>
                            <div class="card-footer-control" >
                                <a v-if="currentSlideIndex > 0" @click="prevSlide()">
                                    <ArrowLeftIcon class="card-footer-arrow"/>
                                </a>
                                <span>{{currentSlideIndex + 1}}/{{flashNews.length}}</span>
                                <a class="w-4">
                                    <ArrowRightIcon 
                                        class="card-footer-arrow"
                                        v-if="currentSlideIndex < flashNews.length - 1" @click="nextSlide()"
                                    />
                                </a>
                            </div>
                        </div> 
                    </div>
                </div>
            </transition>
    </div>
</template>

<style scoped>

.flash-back-card {
    position: relative;
    background: var(--movie-orange);
    border-radius: 20px;
    height: 400px;
    min-width: 400px;
    margin-right: 50px;
}

.flash-card {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 0;
    border-radius: 20px;
    background: white;
    padding: 20px;
    transform: rotate(3deg);
    cursor: pointer;
    box-shadow: -4px 7px 31px -8px rgba(0,0,0,0.75);
}


.flash-card-image {
    width: 100%;
    border-radius: 20px;
}

.flash-card-hot {
    font-size: 19px;
    color: var(--movie-orange);
    padding-bottom: 10px;
}

.flesh-card-text{
    font-weight: bold;
}

.flesh-card-text:hover {
    text-decoration: underline;
} 

.flesh-card-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
}

.card-footer-content {
    padding-bottom: 10px;
    padding-right: 60px;
    display: flex;
    justify-content: space-between;
}

.card-footer-arrow {
    width: 20px;
    transition: color 0.5s ease;
}

.card-footer-arrow:hover {
    color: var(--movie-orange);
}

.card-footer-text {
    color: grey;
}

.card-footer-control {
    display: flex;
    align-items: center;
    gap: 5px;
}


@media screen and (max-width: 1024px) {
    .flash-back-card {
        min-width: none;
        width: 100%;
        height:fit-content;
        margin-right: 0;
        background: var(--movie-black);
    }

    .flash-card {
        position: static;
        transform: rotate(0deg);
        width: 100%;
        height: fit-content;
        padding: 10px;
    }

    .flash-card-image {
        width: 300px;
    }

    .flesh-card-footer {
        position: static;
        margin-top: 10px;
    }

    .card-footer-content {
        padding-bottom: 0px;
        padding-right: 0px;
    } 
}

@media screen and (max-width: 420px) {
    .flash-card {
        width: calc(100vw - 18px);
    }
}

.slide-fade-enter-active,
.slide-fade-leave-active,
.slide-fade-reverse-enter-active,
.slide-fade-reverse-leave-active {
    transition: all .3s ease;
}

.slide-fade-enter {
    transform: translateX(100px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateX(-100px);
    opacity: 0;
}

.slide-fade-reverse-enter {
    transform: translateX(-100px);
    opacity: 0;
}

.slide-fade-reverse-leave-to {
    transform: translateX(100px);
    opacity: 0;
}


</style>



