<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string | undefined;
    subTitle?: string | undefined;
  }>(),
  {
    title: undefined,
    subTitle: undefined,
  }
);
</script>

<template>
  <main class="default-main">
    <h3 v-if="title || $slots.title" class="default-main__title">
      <slot name="title">{{ title }}</slot>
    </h3>

    <p v-if="subTitle || $slots.subTitle" class="default-main__sub-title">
      <slot name="subTitle">{{ subTitle }}</slot>
    </p>

    <div class="default-main__content">
      <slot></slot>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.default-main {
  $medium-breakpoint: 1024px;

  margin-top: 1.25rem;
  text-align: center;

  &__title {
    font-size: 1.1rem;
  }

  &__content {
    margin-top: 1.25rem;
  }
}
</style>
