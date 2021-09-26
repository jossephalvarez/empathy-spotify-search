const actions = {

    init({dispatch, rootGetters}) {
        if (!rootGetters["auth/getAccessToken"]) {
            dispatch("auth/getToken", null, {root: true});
        }
    }
};

const module = {
    namespaced: true,
    actions
};

export default module;
