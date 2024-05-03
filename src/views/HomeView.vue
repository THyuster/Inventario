<script setup lang="ts">
import navbar from '@/components/navbar.vue';

function disableTouchScroll() {
  document.addEventListener('touchmove', preventDefault, { passive: false });
}

function preventDefault(e: TouchEvent) {
  e.preventDefault();
  
}

disableTouchScroll();
</script>

<template>
  <navbar></navbar>
  <form class="row g-1 needs-validation" novalidate>
 
    <div class="container">

<div class="slider">

    <input type="radio" name="slider" id="slideOne" checked>
    <input type="radio" name="slider" id="slideTwo">
    <input type="radio" name="slider" id="slideThree">

    <div class="buttons">
        <label for="slideOne"></label>
        <label for="slideTwo"></label>
        <label for="slideThree"></label>
    </div>

        <div class="content">
            <div class="firstslide"> 
                <img src="/public/porche.jpg" alt=""> 
            </div>
            <div class="secondslide">
                <img src="/public/nsx.webp">
            </div>
            <div class="thirdslide">
                <img src="/public/r35.jpeg">
            </div>
        </div>
    </div>
</div>
</form>
</template>
<style scoped>
@import './src/assets/estilosHome.css';
</style>
