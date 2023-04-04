import '@/assets/main.css';
import App from '@/App.vue';
import type { Component } from 'vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';

const app = createApp(App as Component);

app.use(createPinia());
app.use(router);

app.mount('#app');
