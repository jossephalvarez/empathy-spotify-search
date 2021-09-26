import request from "./request";

const createRequestInterceptor = (store) => {
    request.interceptors.request.use(function (config) {
        if (store.getters["auth/getAccessToken"]) {

            config.headers.common[
                "Authorization"
                ] = `Bearer ${store.getters["auth/getAccessToken"]}`;
        }
        return config;
    }, null);
};

const createResponseInterceptor = (store) => {
    request.interceptors.response.use(null, async (error) => {
        const {status} = error.response;


        if (status !== 401) {
            return Promise.reject(error);

        }

        try {
            store.dispatch("auth/getToken", null, {root: true});
        } catch (e) {
            console.error(e);
        }
    });
};

const plugin = (store) => {
    createRequestInterceptor(store);
    createResponseInterceptor(store);
};

export default plugin;
