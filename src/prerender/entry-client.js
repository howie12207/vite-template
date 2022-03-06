import { createApp } from '../mainServer';

const { app, router } = createApp();

router.isReady().then(() => {
    app.mount('#app');
});
