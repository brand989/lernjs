<template>
    <div class="cart-list">
        <div class="goods" v-for="item in GOODSONCART" :key="item">
            <Good :good="item.id" />
            <p>Общей стоимостью {{item.count}}</p>
            <Button @myEvent="incGood(item.id)">+</Button>
            <Button @myEvent="decGood(item)">-</Button>
            <Button @myEvent="delGood(item)">Удалить товар</Button>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Good from './Good.vue'
import Button from './Button.vue'

export default {
    components: { Good, Button },

    computed: {
        ...mapGetters('goods', ['GOODSONCART']),
    },
    methods: {
        countGood(id) {
            return this.GOODSONCART.find(good => good.id == id)
        },

        incGood(id) {
            this.incGoodInCart(id)
        },
        decGood(good) {
            if (this.countGood(good.id).count > 1) {
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
    },

}
</script>

<style>
</style>