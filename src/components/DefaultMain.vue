<script setup lang="ts">
defineProps<{
  title?: string | undefined;
}>();
</script>

<template>
  <main class="default-main">
    <p class="default-main__title">
      <slot name="title">{{ title }}</slot>
    </p>

    <div class="default-main__content">
      <slot></slot>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.default-main {
  $medium-breakpoint: 1024px;

  margin-top: 1rem;

  &__title {
    font-size: 1.1rem;
    text-align: center;
  }

  &__title + &__content {
    margin-top: 1rem;
    text-align: center;
  }
}
</style>
