import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Notifications from 'vue-notification'

import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faCartShopping, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faCartShopping, faCartArrowDown)



Vue.config.devtools = true
Vue.use(Notifications)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    el: 'main',
    template: '<App />',
    components: {
        App,
    },
    store,

})