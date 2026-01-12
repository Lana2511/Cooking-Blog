<template>
  <section class="about">
    <div class="container about__grid">


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

          <button class="btn about__btn" type="button">Read more</button>
        </div>

        <div class="about__image about__image--top">
          <img
              src="/src/assets/icons/recipes/about1.png"
              alt="Cooking meat on a pan"
              loading="lazy"
          />
        </div>

        <div class="about__image about__image--right">
          <img
              src="/src/assets/icons/recipes/about3.png"
              alt="Chef cooking in the kitchen"
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

  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.about {
  padding: 0 0;

  &__grid {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;
    gap: 8px;

    grid-template-areas:
      "content top right"
      "bottom     bottom  right";

    align-items: stretch;

    max-width: 1312px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 32px;
    padding: 18px 18px 20px;
  }

  &__content {
    grid-area: content;
    padding: 28px 28px 24px;
    width: 385px;
  }

  &__title {
    margin: 0 0 14px;
    font-size: 40px;
    line-height: 1;
    letter-spacing: 0.01em;
    text-transform: uppercase;
  }

  &__text {
    margin: 0 0 12px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.62);
    line-height: 1.4;
  }

  &__btn {
    padding: 0 18px;
  }

  &__image {
    border-radius: 24px;
    overflow: hidden;
    background: #eee;
    min-height: 220px;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    &--top {
      grid-area: top;
      min-height: 220px;
    }

    &--right {
      grid-area: right;
      min-height: 100%;
    }

    &--bottom {
      grid-area: bottom;
      min-height: 260px;
    }
  }
}
</style>