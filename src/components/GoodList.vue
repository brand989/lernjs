<template>
    <div>
        <div class="goods-list">
            <div class="goods" v-for="item in GOODSONPAGE" :key="item">
                <Good :good="item" />
                <Button @myEvent="eventclick(item)">купить</Button>
            </div>

        </div>
    </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import Good from './Good.vue'
import Button from './Button.vue'


export default {
    components: { Good, Button },

    methods: {
        // findGoods(id){
        //     return store.goods.getters.GOODSONCART.filter(item => item.id == id).length
        // },

        eventclick(id) {
            this.addGoodInCart(id)
        },
        ...mapActions('goods', [
            'addGoodInCart',
        ]),
    },

    computed: {
        ...mapGetters('goods', ['GOODSONPAGE'], ['GOODSONCART']),
    }

}
</script>

<style>
.goods-list {
    display: flex;
}
</style>