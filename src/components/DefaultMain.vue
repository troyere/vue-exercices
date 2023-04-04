<script setup lang="ts">
defineProps<{
  title?: string | undefined
}>()
</script>

<template>
  <main class="default-main">
    <slot name="heading">{{ title }}</slot>
    <slot></slot>
  </main>
</template>
