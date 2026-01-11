<template>
  <section class="hero">
    <div class="container hero__inner">
      <div class="hero__content">
        <h1 class="hero__title">Unleash Culinary<br>Excellence</h1>
        <p class="hero__description">
          Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen
        </p>
        <button class="btn hero__btn">Explore Recipes</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.hero {
  margin-top: 24px;

  &__inner {
    max-width: 1312px;
    height: 577px;

    position: relative;
    border-radius: 32px;
    overflow: hidden;

    border: 1px solid #000;

    background-image:
        linear-gradient(
                rgba(38, 37, 34, 0.6),
                rgba(38, 37, 34, 0.6)
        ),
        url("/src/assets/icons/recipes/chicken.png");
    background-size: cover;
    background-position: center;
  }

  &__content {
    height: 100%;
    padding: 0 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #F0EBE1;
  }

  &__title {
    max-width: 869px;
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 80px;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -1px;
    text-transform: uppercase;
  }

  &__description {
    max-width: 427px;
    margin-top: 0;
    margin-bottom: 40px;
    font-size: 21px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1px;
    text-align: center;
  }

  &__btn {
    height: 38px;
    padding: 12px 24px;
    background-color: #ff9f1c;
    color: #1e1e1e;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;
  }
}
</style>