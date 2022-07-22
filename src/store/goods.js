const state = {
    goods: ['good1', 'good2']
}
const getters = {
    GOODS: state => {
        return state.goods
    }
}
const actions = {
    addInGoods({
        state,
        commit
    }, good) {
        commit('addInGoods', good)

    }
}
const mutations ={
    addInGoods(state, good) {
        state.goods.push(good)
    },
}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}