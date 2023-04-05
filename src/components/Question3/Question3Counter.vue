<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

const onClick = (): void => {
  count.value += 1;
};
</script>

<template>
  <div class="question-3-counter">
    <button type="button" @click="onClick">Incrémenter</button>

    <p><em>Valeur du compteur&#160;: </em>{{ count }}</p>
  </div>
</template>
