<template>
    <div>
        <div class="goods-list">
            <div class="good" v-for="item in addGoodsOnPage" :key="item">
                <Good :goodId="item" />
                <Button @myEvent="addGoodCart(item)" class="button">
                <font-awesome-icon icon="fa-solid fa-cart-arrow-down" />
                Добавить в корзину</Button>
            </div>
        </div>
        <div class="more">
            <Button @myEvent="moreGoods()" v-if="isGoods">Еще товары</Button>
        </div>
    </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import Good from './Good.vue'
import Button from './Button.vue'


export default {
    components: { Good, Button },

    data() {
        return {
            countGoodsOnPage: 2,
            isGoods: true,
        }
    },

    methods: {
        findGoodsInCart(id) {
            return this.GOODSONCART.filter(item => item.id == id).length
        },

        addGoodCart(id) {
            if (!this.findGoodsInCart(id)) {
                this.addGoodInCart(id)
            } else {
                this.incGoodInCart(id)
            }

        },

        ...mapActions('goods', [
            'addGoodInCart', 'incGoodInCart'
        ]),

        moreGoods() {
            this.countGoodsOnPage+=3

            if (this.countGoodsOnPage >= this.GOODSONPAGE.length - 1) {
                this.isGoods = false
            }

        }
    },

    computed: {
        ...mapGetters('goods', ['GOODSONPAGE', 'GOODSONCART']),

        addGoodsOnPage() {
            return this.GOODSONPAGE.filter((item, index) => {
                return index <= this.countGoodsOnPage
            })
        },

    }

}
</script>

<style lang="scss">
.goods-list {
    display: flex;
    flex-wrap: wrap;

    .good {
        border-radius: 3px;
        width: 400px;
        margin: 0px 50px 20px 50px;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding-top: 10px;
        padding-bottom: 30px;
    }

    .good:hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }

    .button {

        margin-left: 20px;
        width: 50%;

    }


}

.more {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>