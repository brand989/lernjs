const state = {
    notices: ['vau','ds','vau','ds']
}
const getters = {
    notices: state => {
        return state.notices
    },

}
const actions = {
    addnotice({commit}, message) {
        commit('addnotice', message)

    },
    delNotice({commit}) {
        commit('delNotice')

    },
}
const mutations = {
    addnotice(state, message) {
        state.notices.push(message)
    },
    delNotice(state){
        state.notices.splice(0,1)
    }


}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}