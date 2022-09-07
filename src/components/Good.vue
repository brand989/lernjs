<template>
    <div class="good-content">

        <div class="good-info" v-if="!cart">
            <img :src="[GOODS[goodId].url]">
            <p class="price-name">{{ format(GOODS[goodId].price) }} ₽</p>
            <p class="good-name">{{ GOODS[goodId].name }}</p>
        </div>

        <div class="cart-info" v-if="cart">
            <div class="cart-info-name">
                <img :src="[GOODS[goodId].url]">
                <p class="good-name">{{ GOODS[goodId].name }}</p>
            </div>

            <div class="cart-info-count">
                <Button class="button-cart" @myEvent="decGood(GOODS[goodId])">-</Button>
                <p>{{ count }}</p>
                <Button class="button-cart" @myEvent="incGood(GOODS[goodId].id)">+</Button>
                <Button class="button-link-cart" @myEvent="delGood(GOODS[goodId])">Удалить товар</Button>
            </div>

            <div class="cart-info-price">
                <p>{{ format(count * GOODS[goodId].price) }} рублей</p>
            </div>

        </div>


    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Button from './Button.vue'

export default {
    components: { Button },
    props: {
        goodId: Number,
        count: Number,
        cart: Boolean
    },
    data() {
        return {
            url: './img/nofotos.jpeg',
            cart: false
        }
    },

    computed: {
        ...mapGetters('goods', ['GOODS', 'GOODSONCART']),
    },
    methods: {
        countGoods(id) {
            return this.GOODSONCART.find(good => good.id == id)
        },

        incGood(id) {
            this.incGoodInCart(id)
        },
        decGood(good) {
            if (this.countGoods(good.id).count > 1) {
                this.decGoodInCart(good.id)
            } else {
                this.delGoodInCart(good)
            }

        },
        delGood(good) {
            this.delGoodInCart(good)
        },
        ...mapActions('goods', [
            'incGoodInCart', 'decGoodInCart', 'delGoodInCart'
        ]),

        format(value) {
            return new Intl.NumberFormat("ru").format(value)
        }

    },

}
</script>

<style lang="scss">
.good-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;

    .good-info {
        width: 100%;
        padding-left: 40px;

        .price-name {

            font-size: 28px;
            line-height: 24px;
            color: #242424;
            font-weight: 700;
            margin-right: 10px;
        }


        img {
            max-width: 90%;

        }

    }

    .cart-info {
        display: flex;
        width: 100%;
        height: 150px;
        justify-content: space-between;

        .cart-info-name {
            max-width: 30%;
            align-items: center;
            display: flex;

            @media screen and (max-width: 720px) {
                display: block;
            }


            img {
                max-width: 90%;
                max-height: 80%;
                float: left;
                margin-right: 35px;
            }

            .good-name {
                font-size: 12px;
                color: #777777;
            }

        }

        .cart-info-count {
            display: flex;
            align-items: center;
            position: relative;

           
            .button-cart {
                border-radius: 50%;
                padding: 0;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: white;
                border: 1px #e6e3e3 solid;
                color: #717171;
                font-size: 20px;
                font-weight: normal;
                margin: 10px;
            }

            .button-link-cart {
                padding: 0;
                background-color: white;
                color: gray;
                text-decoration: underline;
                position: absolute;
                bottom: 25px;
                font-size: 12px;
                width: 100%;
                text-align: center;

                &:hover {
                    text-decoration: none;
                }
            }


        }

        .cart-info-price {
            padding-top: 50px;
        }

    }



}
</style>