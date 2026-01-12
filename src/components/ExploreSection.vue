<template>
  <section class="explore">
    <div class="container explore__wrapper">

        <div class="explore__content">
          <span class="tag">Explore</span>

          <h2 class="explore__title">Our Diverse<br>Palette</h2>

          <p class="explore__text">
            If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout for irresistible desserts, our curated selection has something to satisfy every palate.
          </p>

          <button class="btn explore__btn" type="button">See more</button>
        </div>

        <div class="explore__filters">
          <ul class="explore__list">
            <li
                v-for="category in categories"
                :key="category.id"
                class="explore__item"
            >
              <img
                  class="explore__icon"
                  :src="category.icon"
                  :alt="category.alt"
                  width="37"
                  height="37"
                  loading="lazy"
              />

              <p class="explore__item-name">
                {{ category.name }}
              </p>
            </li>
          </ul>

        </div>
      </div>

  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    id: 1,
    name: 'Breakfast',
    icon: '/src/assets/icons/breakfast.svg',
    alt: 'Завтрак',
  },
  {
    id: 2,
    name: 'Lunch',
    icon: '/src/assets/icons/lunch.svg',
    alt: 'Обед',
  },
  {
    id: 3,
    name: 'Dinner',
    icon: '/src/assets/icons/dinner.svg',
    alt: 'Ужин',
  },
  {
    id: 4,
    name: 'Dessert',
    icon: '/src/assets/icons/dessert.svg',
    alt: 'Десерт',
  },
  {
    id: 5,
    name: 'Quick bite!',
    icon: '/src/assets/icons/quick-bite.svg',
    alt: 'Перекус',
  },
]
</script>


<style scoped lang="scss">
.explore {
  margin-top: 24px;

  &__wrapper {
    width: 100%;
    max-width: 1312px;
    min-height: 504px;
    margin: 0 auto;
    padding: 40px;
    border-radius: 32px;
    background: #C4E5FC;
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 238px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 494px;
  }

  &__title {
    margin: 16px 0 12px;
    width: 100%;
    font-size: 40px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: .01em;;
    text-transform: uppercase;
  }

  &__text {
    margin: 0 0;
    color: rgba(38, 37, 34, 0.75);
    font-size: 16px;
    line-height: 1.4;
  }

  &__btn {
    padding: 10px 18px;
    border: 1px solid #262522;
    font-size: 14px;
    font-weight: 500;
    margin-top: 40px;
  }

  &__filters {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  &__list {
    width: 100%;
    max-width: 497px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 0;
    border-top: 1px solid rgba(38, 37, 34, 0.18);

    &:first-child {
      border-top: none;
    }

    &:last-child {
      border-bottom: 1px solid rgba(38, 37, 34, 0.18);
    }
  }

  &__icon {
    display: block;
  }

  &__item-name {
    margin: 0;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #262522;
  }
}
</style>