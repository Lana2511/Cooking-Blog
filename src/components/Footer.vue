<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__logo">
        <a class="footer__logo--icon" href="#">
          <img
              class="logo-img"
              src="/src/assets/icons/footer-logo.svg"
              alt="Логотип"
              width="40" height="35" loading="lazy"
          />
        </a>
        <p class="logo-text">Cooks<br />Delight</p>
      </div>

      <nav class="footer__nav">
        <a
            v-for="(link, index) in navLinks"
            :key="link.name"
            :href="link.href"
            :class="['nav-link', { active: index==0 }]"
        >
          {{ link.name }}
        </a>
      </nav>

      <ul class="social">
        <li
            v-for="link in socialLinks"
            :key="link.name"
            class="social__item"
        >
          <img
              :src="`/icons/social/${link.name}.svg`"
              :alt="link.label"
              width="24"
              height="24"
              loading="lazy"
          />
        </li>
      </ul>

      <div class="footer__bottom">
        <p class="footer__copy">Copyright © 2024 Cooks Delight</p>
      </div>
    </div>


  </footer>
</template>

<script setup lang="ts">
import {navLinks} from "../shared/navLinks.ts";
import {socialLinks} from "../shared/socialIcons.ts";
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  width: 100%;
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  max-width: 1313px;
  width: 100%;

  gap: 15px;

  padding: 0 40px 24px;

  background-color: #262522;
  border-radius: 32px;
}

.footer__nav {
  gap: 32px;
}

.logo-text {

}

.social {
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer__copy {
  color: white;
}
</style>