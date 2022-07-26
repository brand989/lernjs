<template>
    <div>
        <div class="goods-list">
            <div class="goods" v-for="item in addGoodsOnPage" :key="item">
                <Good :goodId="item" />
                <Button @myEvent="eventclick(item)">купить</Button>
            </div>
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
            countGoodsOnPage: 1,
            isGoods: true,
        }
    },

    methods: {
        findGoodsInCart(id) {
            return this.GOODSONCART.filter(item => item.id == id).length
        },

        eventclick(id) {
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
            this.countGoodsOnPage++

            if (this.countGoodsOnPage == this.GOODSONPAGE.length - 1 ) {
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

<style>
.goods-list {
    display: flex;
}
</style>