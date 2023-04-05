<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');

const onInput = (event: InputEvent): void => {
  text.value = (event.target as HTMLInputElement).value;
};
</script>

<template>
  <form class="question-2-form">
    <input :value="text" @input="onInput" />

    <p><em>Vous avez écrit&#160;: </em>{{ text }}</p>
  </form>
</template>
