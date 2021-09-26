import Vue from 'vue';
import Vuex from 'vuex';
import vuexPersistedstate from 'vuex-persistedstate';

import app from './modules/app';
import auth from './modules/auth';
import search from './modules/search';

import spotifyApiPlugin from '@/api/spotify/plugin';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

const persistedState = vuexPersistedstate({
    key: 'vue-test-empathy',
    reducer: state => ({
        auth: state.auth,
    }),
});

export default new Vuex.Store({
    modules: {
        app,
        auth,
        search
    },
    plugins: [spotifyApiPlugin, persistedState],
    strict: debug
});
