import { createApp } from 'vue';

import { registerCompoents } from './global';

import App from './App.vue';

import router from './router';
import store from './store';

const app = createApp(App);

registerCompoents(app);

app.use(router);
app.use(store);

app.mount('#app');
