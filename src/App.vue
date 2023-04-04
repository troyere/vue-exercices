<script setup lang="ts">
import DefaultHeader from './components/DefaultHeader.vue';
import type { RouteLocationRaw } from 'vue-router';
import { RouterView } from 'vue-router';

const navConfig: { to: RouteLocationRaw; title: string }[] = [
  { to: '/', title: 'Home' },
  { to: '/question/1', title: 'Question 1' },
  { to: '/question/2', title: 'Question 2' },
  { to: '/question/3', title: 'Question 3' },
  { to: '/question/4', title: 'Question 4' },
];
</script>

<template>
  <DefaultHeader :nav-config="navConfig" title="Exercices Vue" />

  <RouterView />
</template>
