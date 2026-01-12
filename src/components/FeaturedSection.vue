<template>
  <section class="featured">
    <div class="container featured__inner">
      <div class="featured__header">
        <h2 class="featured__title">Featured recipes</h2>

        <div class="featured__arrows">
          <button class="arrow" type="button">‹</button>
          <button class="arrow" type="button">›</button>
        </div>
      </div>

      <div class="featured__cards">
        <RecipeCard
            v-for="recipe in featuredRecipes"
            :key="recipe.id"
            :recipe="recipe"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import RecipeCard from "./RecipeCard.vue";
import { featuredRecipes } from "../mocks/featuredRecipes.ts";
</script>

<style scoped lang="scss">
.featured {
  padding: 24px 0;

  &__inner {
    width: 100%;
    max-width: 1312px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 32px;
    padding: 18px 18px 20px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 14px;
  }

  &__title {
    margin: 0;
    font-weight: 900;
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #1a1a1a;
  }

  &__arrows {
    display: flex;
    gap: 2px;
  }

  .arrow {
    width: 40px;
    height: 40px;
    border-radius: 999px;

    border: 1px solid rgba(0, 0, 0, 0.2);
    background: transparent;
    color: #1a1a1a;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: 22px;
    line-height: 1;
    cursor: pointer;

    transition: background-color 140ms ease, transform 140ms ease;

    &:hover {
      background: rgba(255, 255, 255, 0.55);
    }

    &:active {
      transform: scale(0.96);
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;

  }
}
</style>