import api from "@/api";

const state = {
    accessToken: "",
};

const getters = {
    getAccessToken: (state) => state.accessToken
};

const mutations = {
    SET_ACCESS_TOKEN(state, token) {
        state.accessToken = token;
    },
};

const actions = {
    getToken: async function ({commit, dispatch}) {
        try {
            const response = await api.auth.getToken();
            const accessToken = response?.data?.access_token;

            commit("SET_ACCESS_TOKEN", accessToken);
            dispatch("setAccessToken", accessToken);
        } catch (e) {
            console.log(e);
        }
    },
};

const module = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export default module;
