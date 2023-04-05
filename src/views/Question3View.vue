<script setup lang="ts">
import DefaultMain from '../components/DefaultMain.vue';
import Question3Counter from '../components/Question3/Question3Counter.vue';
</script>

<template>
  <DefaultMain>
    <template #title>Question 3</template>

    <template #subTitle>Corriger le code de Question3Counter.vue afin de faire fonctionner le compteur&#160;:</template>

    <template #default>
      <Question3Counter />
    </template>
  </DefaultMain>
</template>
