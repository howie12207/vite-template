import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import '@/style/tailwind.css';
import '@/style/global.scss';

import { createMetaManager } from 'vue-meta';
import fontAwesomeIcon from '@/utils/fontawesome.js';

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .use(createMetaManager())
    .component('FAIcon', fontAwesomeIcon)
    .mount('#app');

window.snapSaveState = () => {
    document.querySelector('#app').setAttribute('data-server-rendered', 'true');
};
