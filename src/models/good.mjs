import mongoose from "mongoose";

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

export const Goods = model('goods', goodsSchema)