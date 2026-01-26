<template>
  <section class="cta" id="cta" v-if="!subscriptionStore.isSubscribed">
    <div class="container cta__wrapper">

        <p class="tag cta__tag">Subscribe</p>

        <h2 class="cta__title">
          Join the Fun<br />
          Subscribe Now!
        </h2>

        <p class="cta__text">
          Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive insights straight to your inbox.
        </p>

        <form class="cta__form" @submit.prevent="onSubmit">
          <div class="cta__field">
            <input
                class="cta__input"
                id="cta-email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                v-model="email"
            />
            <button class="btn cta__btn" type="submit">Subscribe</button>
          </div>
        </form>
      </div>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useSubscriptionStore} from "../stores/useSubscriptionStore.ts";

const subscriptionStore = useSubscriptionStore()
const email = ref('')

function onSubmit() {
  if (!email.value)
    return

  subscriptionStore.subscribe(email.value)
  email.value = ''
}
</script>

<style scoped lang="scss">
.cta {
  margin-top: 20px;

  &__wrapper {
    width: 100%;
    max-width: 1312px;

    overflow: hidden;

    padding: 117px 64px;
    border-radius: 32px;

    text-align: center;
    color: #ffffff;

    background: #EE6352;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 16px;

    font-family: "Montserrat", sans-serif;
    font-size: 56px;
    font-weight: 800;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  &__text {
    max-width: 620px;
    margin: 0 auto 28px;

    font-size: 16px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.92);
  }

  &__form {
    display: flex;
    justify-content: center;
  }

  &__field {
    display: flex;
    align-items: center;

    width: min(560px, 100%);
    padding: 6px;

    border-radius: 999px;
    background-color: #f7f1e6;
  }

  &__input {
    flex: 1;

    padding: 12px 16px;
    border: none;
    outline: none;
    background: transparent;

    font-size: 16px;
    color: #262522;

    &::placeholder {
      color: rgba(38, 37, 34, 0.55);
    }
  }

  &__btn {
    background-color: #1c1c1c;
    color: #ffffff;
    border: none;
    border-radius: 24px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #000000;
    }
  }
}
</style>