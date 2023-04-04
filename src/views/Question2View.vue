<script setup lang="ts">
import DefaultMain from '../components/DefaultMain.vue';
import Question2Form from '../components/Question2/Question2Form.vue';
</script>

<template>
  <DefaultMain>
    <template #title>Question 2</template>

    <template #subTitle>Comment simplifier le code du composant Question2Form.vue ?</template>

    <template #default>
      <Question2Form />
    </template>
  </DefaultMain>
</template>
