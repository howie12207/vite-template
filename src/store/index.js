import { createStore as _createStore } from 'vuex';
import user from './user';

export function createStore() {
    return _createStore({
        strict: process.env.NODE_ENV === 'development',
        state: {
            pageLoading: false,
            test: '77test'
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
}
