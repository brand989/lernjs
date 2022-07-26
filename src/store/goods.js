const state = {
    goods: {},
    goodsOnPage: [],
    goodsOnCart: []

}

const getters = {
    GOODS: state => {
        return state.goods
    },
    GOODSONPAGE: state => {
        return state.goodsOnPage
    },
    GOODSONCART: state => {
        return state.goodsOnCart
    }
}
const actions = {
    requestData({
        commit
    }, page) {
        if (!page) {
            return
        }
        fetch(`/itemslist/${page}`, {
                method: 'GET'
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                commit('setData', data)
            })
    },

    addGoodInCart({commit}, idGood) {
        commit('addInCart', idGood)
    },
    incGoodInCart({commit}, idGood){
        commit('incInCart', idGood)
    },
    decGoodInCart({commit}, idGood){
        commit('decInCart', idGood)
    },
    delGoodInCart({commit}, idGood){
        commit('delInCart', idGood)
    }

}
const mutations = {
    setData(state, newData) {
        state.goods = {
            ...newData
        }
        state.goodsOnPage.push(...Object.keys(newData))
    },



    addInCart(state, idGood) {

        state.goodsOnCart.push({
            id: idGood,
            count: 1
        })

    },

    incInCart(state, idGood){
        state.goodsOnCart.map(item => {
            if (item.id == idGood) {
                return item.count++
            }
        })
    },

    decInCart(state, idGood){
        state.goodsOnCart.map(item => {
            if (item.id == idGood) {
                return item.count--
            }
        })
    },

    delInCart(state, good){
        console.log(good, state.goodsOnCart.indexOf(good) )
        state.goodsOnCart.splice(state.goodsOnCart.indexOf(good),1)
    }

}




export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}