<template>
<div class="flex flex-col min-h-screen">
  <NavbarComponent/>
  <div class="main container mx-auto px-4 py-6 flex-grow">
    <router-view></router-view>
  </div>
  <FooterComponent/>
</div>
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>