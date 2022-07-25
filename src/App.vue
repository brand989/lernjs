<template>
  <div>
    <header class="header">
      <div v-bind:class="[logo]"> My shop </div>
      <div class="cart" v-bind:class="{ invisible: isActive }">
        <CartList />
      </div>
      <Button @myEvent="eventclick">Корзина</Button>


    </header>
    <main>
      <h1>Товары</h1>
      <GoodList />
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Button from './components/Button.vue'
import GoodList from './components/GoodList.vue'
import CartList from './components/CartList.vue'


export default {
  components: {
    Button, GoodList, CartList
  },
  data() {
    return {
      logo: 'logo',
      isActive: true
    }
  },
  methods: {
    eventclick() {
      this.isActive = this.isActive ? false : true
    },

    ...mapActions('goods', [
      'requestData',
    ]),

  },

  computed: {
    ...mapGetters('goods', ['GOODS']),
  },
  mounted() {
    this.requestData(1)
  }

};
</script>

<style module>
.header {
  min-height: 100px;
  background-color: blueviolet;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  padding: 30px;
  font-size: 40px;
}

.cart {
  color: white;
  font-weight: bold;
  padding: 15px;
}

main h1 {
  padding: 30px;
}

.invisible {
  display: none;
}


.cart {
  position: absolute;
  color: white;
  background-color: #eb6fd6;
  right: 10px;
  top: 150px;
  padding: 15px;
}
</style>