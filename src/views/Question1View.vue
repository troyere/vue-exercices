<script setup lang="ts">
import DefaultMain from '../components/DefaultMain.vue';
import Question1Hello from '../components/Question1/Question1Hello.vue';

const name = 'Bob';
</script>

<template>
  <DefaultMain>
    <template #title>Question 1</template>

    <template #subTitle>
      Afficher <strong>Hello {{ name }}</strong> en implémentant la fonction "greeter" de Question1Utils.ts :
    </template>

    <template #default>
      <Question1Hello :name="name" />
    </template>
  </DefaultMain>
</template>
