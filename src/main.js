import { createApp } from 'vue';
import App from '@/App.vue';
import { createRouter } from '@/router';
import { createStore } from '@/store';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import '@/style/tailwind.css';
import '@/style/global.scss';

import fontAwesomeIcon from '@/utils/fontawesome.js';

const router = createRouter();
const store = createStore();

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .component('FAIcon', fontAwesomeIcon)
    .mount('#app');
