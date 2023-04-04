<script setup lang="ts">
import { computed } from 'vue';
import { greeter } from './Question1Utils';

const props = defineProps<{
  name: string;
}>();

const greeting = computed<string>(() => {
  return greeter('Hello')(props.name);
});
</script>

<template>
  <p>{{ greeting }}</p>
</template>
