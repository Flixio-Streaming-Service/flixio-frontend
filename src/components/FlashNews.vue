<script setup lang="ts">
import { ref, computed } from 'vue';
import Stack from './UI/Stack.vue';
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
   <Stack>
        <transition :name="!isBackDirection ? 'slide-fade' : 'slide-fade-reverse'">
            <div v-show="!loading" class="w-full h-full bg-white rounded-2xl p-6 absolute drop-shadow-md lg:rotate-3 cursor-pointer transition-all ease-in-out flex flex-col hover:rotate-0">
                <div v-if="!loading">
                    <img 
                    :src="currentSlide.image" 
                    alt="newsImage"
                    class=" rounded-2xl aspect-video"
                    />
                    <h2 class=" text-movie-orange mt-1 font-bold">🔥 Hot News</h2>
                    <p class="mt-1 font-bold leading-5 ">{{currentSlide.text}}</p>
                </div>

                <div class="h-full flex flex-col justify-end">
                <div class="flex justify-between">
                        <div class="text-gray-400">{{currentSlide.date}}</div>
                        <div class="flex gap-2 items-center" >
                            <a v-if="currentSlideIndex > 0" @click="prevSlide()">
                                <ArrowLeftIcon class="w-4 cursor-pointer hover:text-movie-orange"/>
                            </a>
                            <span>{{currentSlideIndex + 1}}/{{flashNews.length}}</span>
                            <a class="w-4">
                                <ArrowRightIcon 
                                    class="w-4 cursor-pointer hover:text-movie-orange"
                                    v-if="currentSlideIndex < flashNews.length - 1" @click="nextSlide()"
                                />
                            </a>
                        </div>
                </div> 
                </div>
            </div>
        </transition>
   </Stack>
</template>

<style scoped>
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



