<template>
    <div class="cart-list">
        <div class="goods" v-for="item in GOODSONCART" :key="item">
            <Good :good="item" />
            <Button @myEvent="eventclick(item)">+</Button>
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
            console.log('click')
        }
    },

}
</script>

<style>
</style>