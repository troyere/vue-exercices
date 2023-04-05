<script setup lang="ts">
import { ref } from 'vue';

const weekNumber = ref<number>();

const onClick = (): void => {
  fetch('https://worldtimeapi.org/api/ip')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      weekNumber.value = data.week_number;
    });
};
</script>

<template>
  <div class="question-4-time">
    <button type="button" @click="onClick">Afficher le numéro de semaine</button>

    <p><em>Semaine n°&#160;: </em>{{ weekNumber }}</p>
  </div>
</template>
