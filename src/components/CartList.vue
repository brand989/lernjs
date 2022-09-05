<template>
    <div class="cart-list">
        <h1>Корзина</h1>
        <div v-if="GOODSONCART.length">
            <div class="goods" v-for="item in GOODSONCART" :key="item">
                <Good :goodId="item.id" :count="item.count" :cart="true" />
            </div>
            <div class="basket-price">Общая стоимость товаров: {{ SUMPRODUCTPRICECART }} </div>
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

}
</script>

<style lang="scss">
.goods{
    display: flex;
    max-height: 150px;
}

.basket-price{
    margin-top: 5px;
}

</style>