import Vue from 'vue'
import App from './App.vue'
import store from './store'


Vue.config.devtools = true

new Vue({
    el: 'main',
    template: '<App />',
    components: {
        App,
    },
    store,

})