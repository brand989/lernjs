const mongoose = require('mongoose');

const { Schema, model } = mongoose

const orderSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    phone: {
        price: String,
    },
    mail: {
        type: String,
        required: true,
    },
    cart:{
        type: Array,
        required: true,
    },
    
})

const Orders = model('orders', orderSchema)


module.exports = Orders 