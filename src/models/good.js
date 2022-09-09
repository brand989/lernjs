const mongoose = require('mongoose');

const { Schema, model } = mongoose

const goodsSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    price: {
        price: String,
        required: false,
    },
    url: {
        type: String,
        required: true,
    },
    
})

 const Goods = model('goods', goodsSchema)

 module.exports = Goods