import req from '@/utils/request';

const sessionToken = sessionStorage.getItem('token');

const state = {
    isLogin: !!sessionToken,
    token: sessionToken
};

const mutations = {
    SET_TOKEN(state, token) {
        state.isLogin = true;
        state.token = token;
        sessionStorage.setItem('token', token);
    },
    REMOVE_TOKEN() {
        state.isLogin = false;
        state.token = null;
        sessionStorage.removeItem('token');
    }
};

const actions = {
    async LOGIN({ commit }, params) {
        commit('SET_PAGE_LOADING', true, { root: true });
        const res = await req.post('/login', params);
        if (res) {
            const token = res;
            commit('SET_TOKEN', token);
        }
        commit('SET_PAGE_LOADING', false, { root: true });
        return res;
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
};
