<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');

const onInput = (event: InputEvent): void => {
  text.value = (event.target as HTMLInputElement).value;
};
</script>

<template>
  <form>
    <input :model-value="text" @input="onInput" />

    <p class="typed-text"><em>Vous avez écrit :</em> {{ text }}</p>
  </form>
</template>
