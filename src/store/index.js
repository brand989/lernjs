import Vue from 'vue'
import Vuex from 'vuex'

import goods from './goods.js'

import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        goods
    },
    plugins: [createPersistedState({
        paths: ['goods.goodsOnCart']
    })]
})

export default store