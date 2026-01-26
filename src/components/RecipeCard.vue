<template>
  <article class="recipe-card" @click="onOpen">
    <div class="recipe-card__media">
      <img
          :src="recipe.image"
          :alt="recipe.title"
          class="recipe-card__image"
          loading="lazy"
      />

      <img
          v-if="recipe.isVegan"
          src="/src/assets/icons/recipes/vegan.svg"
          alt="Vegan"
          class="recipe-card__badge"
      />
    </div>

    <div class="recipe-card__content">
      <h3 class="recipe-card__title">{{ recipe.title }}</h3>

      <p class="recipe-card__description">
        {{ recipe.description }}
      </p>

      <div class="recipe-card__footer">
        <span class="recipe-card__meta">
          {{ recipe.time }} · {{ recipe.difficulty }} · {{ recipe.serves }}
        </span>

        <button class="btn recipe-card__btn" type="button" @click.stop="onOpen">
          View Recipe
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Recipe } from "../types/recipe.ts";

const props = defineProps<{
  recipe: Recipe;
}>()

const emit = defineEmits<{
  (e: 'open', id: number | string): void
}>()

function onOpen() {
  emit('open', props.recipe.id)
}
</script>


<style scoped lang="scss">
.recipe-card {
  background: #ffffff;
  border: none;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;


  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }

  &__media {
    position: relative;
  }

  &__image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  &__badge {
    position: absolute;
    right: 14px;
    top: 180px;

    width: 100px;
    height: 100px;

    padding: 22.96px;
  }

  &__content {
    padding: 28px 18px 18px;
    background: #FFFBF2;
  }

  &__title {
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.4;
  }

  &__description {
    height: 44px;
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.5);
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  &__meta {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.7);
  }

  &__btn {
    flex: 0 0 auto;

    padding: 10px 14px;

    border: 1px solid rgba(0, 0, 0, 0.18);


    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.4px;



    &:hover {
      background: rgba(255, 255, 255, 0.6);
    }

    &:active {
      transform: scale(0.98);
    }
  }
}
</style>