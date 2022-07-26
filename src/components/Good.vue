<template>
    <div class="good">
        <img :src="[url]">
        <p class="good-name">{{ GOODS[goodId].name }}</p>
        <p class="price-name">{{ GOODS[goodId].price }}</p>

        <template v-if="cart">
            <p >{{count}}</p>
            <p>Общей стоимостью {{count*GOODS[goodId].price}} рублей</p>
        </template>
        
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

<style>
.good {
    width: 200px;
    border: 1px solid black;
    border-radius: 3px;
    margin: 5px;
}

img {
    width: 150px;
}
</style>