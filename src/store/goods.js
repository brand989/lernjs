const state = {
    goods: {
        "1":{ "id": 1, "name": "Shirt", "price": 150 },
        "2":{ "id": 2, "name": "Socks", "price": 15 },
        "3":{ "id": 2, "name": "mobile", "price": 15 },
        "4":{ "id": 2, "name": "tablet", "price": 15 }
    } ,
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
    requestData({ commit }, page) {
        if(!page){
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

    addGoodInCart({ commit }, idGood){
        commit('addInCart', idGood)
    }
}
const mutations ={
    setData( state, newData) {
        state.goods = {...newData} 
        state.goodsOnPage.push(...Object.keys(newData))
    },
    addInCart(state, idGood){
        state.goodsOnCart.push(idGood)
    }

}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}