<script setup lang="ts">
import navbar from '@/components/navbar.vue';

function disableTouchScroll() {
  // This function seems unrelated to the carousel, keeping it as is
}

disableTouchScroll();

import { ref, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(0);
const totalSlides = 3; // We have 3 images now
const intervalTime = 4000; // 4 seconds
let intervalId: number | null = null;

const images = [
  '/public/porche.jpg',
  '/public/nsx.webp',
  '/public/r35.jpeg',
];

const startCarousel = () => {
  intervalId = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides;
  }, intervalTime);
};

const stopCarousel = () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

onMounted(() => {
  startCarousel();
});

onUnmounted(() => {
  stopCarousel();
});

</script>

<template>
  <navbar></navbar>
  <div class="carousel-container" >
    <div class="carousel-slide" v-for="(image, index) in images" :key="index" :class="{ active: index === currentSlide }">
      <img :src="image" alt="Carousel Image">
    </div>
  </div>
</template>
<style scoped>
@import './src/assets/estilosHome.css';

.carousel-container {
  width: 100%; /* Adjust width as needed */
  max-width: 1000px; /* Set a max width for larger screens */
  margin: 40px auto; /* Center the carousel and add more space */
  height: 600px; /* Set a fixed height for the carousel */
  /*overflow: hidden;*/
  position: relative; /* Needed for absolute positioning of slides if used */
  /* background-color: #f0f0f0; /* Removed temporary background color */
  border: 1px solid #ccc; /* Add a border for better visualization */
  border-radius: 8px; /* Rounded corners */
}

.carousel-slide {  
  position: absolute;
  top: -60px;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-slide img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; /* Cover the container while maintaining aspect ratio */

}
</style>
