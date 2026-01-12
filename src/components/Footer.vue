<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__top">
        <div class="footer__top-logo">
          <a class="footer__top--icon" href="#">
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
      </div>

      <div class="footer__bottom">
        <p class="footer__copy">Copyright © 2024 Cooks Delight.</p>
      </div>


    </div>
  </footer>
</template>

<script setup lang="ts">
import {navLinks} from "../shared/navLinks.ts";
import {socialLinks} from "../shared/socialIcons.ts";
</script>

<style scoped lang="scss">
.footer {
  padding: 24px 0 16px;
  border-top: 1px solid #eaeaea;


  &__inner {
    display: flex;
    flex-direction: column;
    background-color: #262522;
    border-radius: 32px;
    max-width: 1312px;

  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  &__top-logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__top--icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .logo-img {
    display: block;
  }

  .logo-text {
    font-size: 14px;
    line-height: 1.1;
    font-weight: 200;
    color: #F0EBE1;
  }

  &__nav {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }

  .nav-link {
    text-decoration: none;
    font-size: 16px;
    opacity: 0.85;
    position: relative;
    color: #F0EBE1;
    text-transform: uppercase;


    &:hover {
      opacity: 1;
    }

    &.active {
      opacity: 1;
      font-weight: 600;
    }
  }

  .social {
    display: flex;
    gap: 12px;
    margin-left: 24px;
    padding: 0;
    list-style: none;

    &__item {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__bottom {
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid #F0EBE1;
  }

  &__copy {
    margin-bottom: 24px;
    font-size: 14px;
    text-align: center;
    color: #F0EBE1;
    text-transform: uppercase;
  }
}
</style>