<template>
    <div class="good-content" :class="{ goodcontentcart: cart }">
        <img :src="[GOODS[goodId].url]">
        <div class="good-info">
            <p class="price-name">{{ GOODS[goodId].price }} ₽</p>
            <p class="good-name">{{ GOODS[goodId].name }}</p>
           
           <template v-if="cart">
                <p>{{ count }} Шт.</p>
                <p>Итого:{{ count * GOODS[goodId].price }} рублей</p>
            </template>

        </div>




    </div>
</template>

<script>
import { mapGetters } from 'vuex'



export default {




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
        ...mapGetters('goods', ['GOODS']),
    }

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
    }

    img {
        max-width: 90%;
    }
}

.goodcontentcart {
    flex-direction: row;

    img {
        max-height: 100%;

    }

}
</style>