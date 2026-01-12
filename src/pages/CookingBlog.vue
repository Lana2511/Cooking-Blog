<template>

    <Header/>

    <main class="main">
      <HeroSection/>

      <ExploreSection/>

      <FeaturedSection/>

      <AboutSection/>

      <CTASection/>
    </main>

    <Footer/>

</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import HeroSection from "../components/HeroSection.vue";
import ExploreSection from "../components/ExploreSection.vue";
import FeaturedSection from "../components/FeaturedSection.vue";
import AboutSection from "../components/AboutSection.vue";
import CTASection from "../components/CTASection.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>

</style>