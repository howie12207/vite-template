import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/home/MainPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/test',
            component: () => import('@/views/test/MainPage.vue')
        },

        // Redirect to home without page
        {
            path: '/:pathMatch(.*)',
            redirect: '/'
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});
export default router;
