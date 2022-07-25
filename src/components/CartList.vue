<template>
    <div class="cart-list">
        <div class="goods" v-for="item in GOODSONCART" :key="item">
            <Good :good="item.id" />
            <p>{{ item.count }} штук</p>
            <Button @myEvent="eventclick(item.id)">+</Button>
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
        eventclick(id) {
            this.addGoodInCart(id)
        },
        ...mapActions('goods', [
            'addGoodInCart',
        ]),
    },

}
</script>

<style>
</style>