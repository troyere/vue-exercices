<script setup lang="ts">
/* eslint-disable */
import { computed } from 'vue';
import { greeter } from './Question1Utils';

const props = defineProps<{
  name: string;
}>();

const greeting = computed<string>(() => {
  // TODO : faire fonctionner la ligne ci-dessous
  // return greeter('Hello')(props.name);

  return props.name;
});
/* eslint-enable */
</script>

<template>
  <p class="question-1-hello">{{ greeting }}</p>
</template>
