<template>
    <div class="cart-list">
        <h1>Корзина</h1>
        <div v-if="GOODSONCART.length">
            <div class="goods" v-for="item in GOODSONCART" :key="item">
                <Good :goodId="item.id" :count="item.count" :cart="true" />
            </div>
            <div class="basket-price">Итого: {{SUMPRODUCTPRICECART}} рублей </div>
        </div>
        <div v-else>
            Корзина пуста
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Good from './Good.vue'


export default {

    components: { Good },
    computed: {
        ...mapGetters('goods', ['GOODSONCART', 'SUMPRODUCTPRICECART']),

    },
  
    methods: {
        format(value) {
            return new Intl.NumberFormat("ru").format(value)
        }

    }

}
</script>

<style lang="scss" module>
.goods {
    display: flex;
    max-height: 150px;
}

.basket-price {
    margin-top: 5px;
    position: absolute;
    right: 25px;
    bottom: 25px;
}
</style>