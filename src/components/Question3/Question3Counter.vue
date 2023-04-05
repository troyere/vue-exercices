<script setup lang="ts">
// FIXME : corriger onClick
let count = 0;

const onClick = (): void => {
  count += 1;
};
</script>

<template>
  <div class="question-3-counter">
    <button type="button" @click="onClick">Incrémenter</button>

    <p><em>Valeur du compteur&#160;: </em>{{ count }}</p>
  </div>
</template>
