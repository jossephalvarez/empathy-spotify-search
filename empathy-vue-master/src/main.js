import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import VueLazyload from "vue-lazyload";


Vue.use(VueLazyload);
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
