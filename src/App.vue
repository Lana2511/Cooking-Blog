<template>
  <div class="app">
  <Header/>

    <main class="main">
      <HeroSection/>

      <ExploreSection/>

      <FeaturedSection/>





      <section class="about">
        <div class="container">
          <div class="about__wrapper">

            <!-- LEFT COLUMN -->
            <div class="about__content">
              <span class="tag">About us</span>

              <h2 class="about__title">
                Our Culinary<br />
                Chronicle
              </h2>

              <p class="about__text">
                Our journey is crafted with dedication, creativity, and an
                unrelenting commitment to delivering delightful culinary
                experiences. Join us in savoring the essence of every dish
                and the stories that unfold.
              </p>

              <button class="about__button btn" type="button">
                Read more
              </button>

              <!-- IMAGES INSIDE TEXT BLOCK -->
              <div class="about__images">
                <div class="about__image about__image--top">
                  <img
                      src="/src/assets/icons/recipes/about1.png"
                      alt="Cooking meat on a pan"
                      loading="lazy"
                  />
                </div>

                <div class="about__image about__image--bottom">
                  <img
                      src="/src/assets/icons/recipes/about2.png"
                      alt="Cooking vegetables in a pot"
                      loading="lazy"
                  />
                </div>
              </div>
            </div>

            <!-- RIGHT COLUMN -->
            <div class="about__media">
              <img
                  class="about__media-image"
                  src="/src/assets/icons/recipes/about3.png"
                  alt="Chef cooking in the kitchen"
                  loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

    </main>

    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <a class="logo logo--footer" href="#" aria-label="Cooks Delight">
            <span class="logo__mark" aria-hidden="true"></span>
            <span class="logo__text">
            <span class="logo__name">Cooks</span>
            <span class="logo__name">Delight</span>
          </span>
          </a>
        </div>

        <nav class="footer__nav" aria-label="Footer navigation">
          <a class="footer__link" href="#">Home</a>
          <a class="footer__link" href="#">Recipes</a>
          <a class="footer__link" href="#">Cooking Tips</a>
          <a class="footer__link" href="#">About Us</a>
        </nav>

        <ul class="social" aria-label="Social links">
          <li class="social__item"><a class="social__link" href="#" aria-label="TikTok">TikTok</a></li>
          <li class="social__item"><a class="social__link" href="#" aria-label="Instagram">Instagram</a></li>
          <li class="social__item"><a class="social__link" href="#" aria-label="Facebook">Facebook</a></li>
        </ul>
      </div>

      <div class="footer__bottom">
        <p class="footer__copy">Copyright © 2024 Cooks Delight</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import HeroSection from "./components/HeroSection.vue";
import ExploreSection from "./components/ExploreSection.vue";
import FeaturedSection from "./components/FeaturedSection.vue";
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}



</style>
