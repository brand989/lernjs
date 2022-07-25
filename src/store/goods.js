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

        if (state.goodsOnCart.filter(item => item.id == idGood).length) {
            state.goodsOnCart.map(item => {
                if (item.id == idGood) {
                    return item.count++
                }
            })
        } else {
            state.goodsOnCart.push({id: idGood,count: 1})
        }

    }

}




export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}