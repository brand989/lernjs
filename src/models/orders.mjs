import mongoose from "mongoose";

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

export const Orders = model('orders', orderSchema)