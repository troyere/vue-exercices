<script setup lang="ts">
import DefaultMain from '../components/DefaultMain.vue';
import Question4Time from '../components/Question4/Question4Time.vue';
</script>

<template>
  <DefaultMain>
    <template #title>Question 4</template>

    <template #subTitle>
      Simplifier le code de <strong>Question4Time.vue</strong> affichant le numéro de la semaine&#160;:
    </template>

    <template #default>
      <Question4Time />
    </template>
  </DefaultMain>
</template>
