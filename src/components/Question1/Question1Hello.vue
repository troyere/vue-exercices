<script setup lang="ts">
import { computed } from 'vue';
import { greeter } from './Question1Utils';

// eslint-disable-next-line
const props = defineProps<{
  name: string;
}>();

const greeting = computed<string>(() => {
  // FIXME : décommenter cette ligne en n'oubliant pas de bien supprimer la ligne eslint
  // return greeter('Hello')(props.name);

  return props.name;
});
</script>

<template>
  <p class="question-1-hello">{{ greeting }}</p>
</template>
