import { createStore } from 'vuex';
import user from './user';

export default createStore({
    strict: process.env.NODE_ENV === 'development',
    state: {
        pageLoading: false
    },
    mutations: {
        SET_PAGE_LOADING(state, status) {
            state.pageLoading = status;
        }
    },
    modules: {
        user
    }
});
