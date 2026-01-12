<template>
  <header class="header">
    <div class="container header__inner">
      <div class="logo-nav-bar">
        <a class="logo-nav-bar__logo" href="/">
          <img
              class="logo-img"
              src="/src/assets/icons/logo.svg"
              alt="Логотип"
              width="40" height="35" loading="lazy"
          />
        </a>
        <p class="logo-text">Cooks<br />Delight</p>
      </div>

      <nav class="link-wrapper">
        <a
            v-for="(link, index) in navLinks"
            :key="link.name"
            :href="link.href"
            :class="['nav-link', { active: index==0 }]"
        >
          {{ link.name }}
        </a>
      </nav>

      <div class="button-wrapper">
        <a class="search" href="/">
          <img
              class="search__img"
              src="/src/assets/icons/search.svg"
              alt="Поиск"
              width="37" height="37" loading="lazy"
          />
        </a>
        <button class="btn subscribe-btn">Subscribe</button>

        <button class="burger-btn">
          <img
              src="/src/assets/icons/burger-mobile.svg"
              alt="Menu"
              width="34"
              height="34"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {navLinks} from "../shared/navLinks.ts";
</script>

<style scoped lang="scss">
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 32px;
  border: 1px solid rgba(38, 37, 34, 0.24);
  padding: 16px 24px;
  max-width: 1312px;
  height: 70px;
  margin-top: 16px;
  background: transparent;
}

.logo-nav-bar {
  display: flex;
  align-items: center;
  gap: 10px;

  &__logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
}

.logo-text {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.1;
  color: #1c1c1c;
}

.link-wrapper {
  display: flex;
  gap: 32px;
}

.nav-link {
  position: relative;
  text-decoration: none;
  font-size: 14px;
  color: #6b6b6b;
  transition: color 0.2s ease;

  &:hover {
    color: #1c1c1c;
  }

  &.active {
    color: #1c1c1c;
    font-weight: 500;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ff6b4a;
      border-radius: 2px;
    }
  }
}

.button-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search {
  display: flex;
  align-items: center;
  justify-content: center;
}

.subscribe-btn {
  background-color: #1c1c1c;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #000000;
  }
}

.burger-btn {
  display: none;
}

@media (max-width: 768px) {
  .header {
    flex-wrap: wrap;
  }

  .link-wrapper {
    display: none;
  }

  .button-wrapper {
    .search,
    .subscribe-btn {
      display: none;
    }

    .burger-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>