<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { RouteLocationRaw } from 'vue-router'

withDefaults(
  defineProps<{
    title: string
    subTitle?: string | undefined
    navConfig: { to: RouteLocationRaw; title: string }[]
  }>(),
  {
    subTitle: undefined
  }
)
</script>

<template>
  <header class="default-header">
    <img
      alt="Vue logo"
      class="default-header__logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="default-header__wrapper">
      <div class="default-header__greetings">
        <h1 class="default-header__title">{{ title }}</h1>

        <h3 v-if="subTitle || $slots.subTitle" class="default-header__sub-title">
          <slot name="subTitle">{{ subTitle }}</slot>
        </h3>
      </div>

      <nav class="default-header__nav">
        <RouterLink
          v-for="navItem in navConfig"
          :key="navItem.title"
          class="default-header__nav-item"
          :to="navItem.to"
        >
          {{ navItem.title }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.default-header {
  $medium-breakpoint: 1024px;

  line-height: 1.5;
  max-height: 100vh;

  @media (min-width: $medium-breakpoint) {
    & {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }
  }

  &__logo {
    display: block;
    margin: 0 auto 2rem;

    @media (min-width: $medium-breakpoint) {
      & {
        margin: 0 2rem 0 0;
      }
    }
  }

  &__wrapper {
    @media (min-width: $medium-breakpoint) {
      & {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
      }
    }
  }

  &__nav {
    margin-top: 1rem;
    display: flex;
    justify-content: center;

    @media (min-width: $medium-breakpoint) {
      & {
        flex-direction: column;
        font-size: 1rem;
        padding: 1rem 0;
      }
    }
  }

  &__nav-item {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    white-space: nowrap;

    &:first-of-type {
      border-color: transparent;
    }

    @media (min-width: $medium-breakpoint) {
      &:first-of-type {
        border-left: 1px solid var(--color-border);
      }
    }

    &.router-link-exact-active {
      color: var(--color-text);

      &:hover {
        background-color: transparent;
      }
    }
  }

  &__title {
    font-weight: 500;
    font-size: 2.6rem;
    white-space: nowrap;
  }

  &__sub-title {
    font-size: 1.2rem;
  }

  &__title,
  &__sub-title {
    text-align: center;

    @media (min-width: $medium-breakpoint) {
      & {
        text-align: left;
      }
    }
  }
}
</style>
