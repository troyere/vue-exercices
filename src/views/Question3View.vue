<script setup lang="ts">
import DefaultMain from '../components/DefaultMain.vue';
import Question3Counter from '../components/Question3/Question3Counter.vue';
</script>

<template>
  <DefaultMain>
    <template #title>Question 3</template>

    <template #subTitle>Corriger <strong>Question3Counter.vue</strong> pour que le compteur fonctionne&#160;:</template>

    <template #default>
      <Question3Counter />
    </template>
  </DefaultMain>
</template>
