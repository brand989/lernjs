import Vue from 'vue'
import Vuex from 'vuex'

import goods from './goods.js'
import notices from './notices'



Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        goods, notices
    }

})

export default store 