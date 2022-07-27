import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Notifications from 'vue-notification'

Vue.config.devtools = true
Vue.use(Notifications)

new Vue({
    el: 'main',
    template: '<App />',
    components: {
        App,
    },
    store,

})