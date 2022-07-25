<template>
    <div class="good">
        <img :src="[url]">
        <p class="good-name">{{ GOODS[good].name }}</p>
        <p class="price-name">{{ GOODS[good].price }}</p>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'



export default {

    
    props: {
        good: Object
    },
    data() {
        return {
            url: './img/nofotos.jpeg'
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