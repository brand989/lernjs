<template>
  <div>
    <div :class="{ dark: !isWindow }">
      <header class="header">
        <div :class="[logo]"> My shop </div>
        <div class="cart" :class="{ invisible: isActive }">
          <CartList />
          <Button @myEvent="makeOrder" v-if="GOODSONCART.length">Оформить заказ</Button>
        </div>
        <Button @myEvent="eventclick">Корзина</Button>

      </header>
      <main>
        <h1>Товары</h1>
        <GoodList />

      </main>
    </div>
    <div class="window" :class="{ invisible: isWindow }">
      <Button @myEvent="makeOrder">Закрыть</Button>
      <Form :goodsOnCart="GOODSONCART" :sumCart="SUMPRODUCTPRICECART" @formAction="makeOrder" />
    </div>
    <notifications group="foo" />

  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Button from './components/Button.vue'
import GoodList from './components/GoodList.vue'
import CartList from './components/CartList.vue'
import Form from './components/Form.vue'


export default {
  components: {
    Button, GoodList, CartList, Form
  },
  data() {
    return {
      logo: 'logo',
      isActive: true,
      isWindow: true,
      isNotice: false
    }
  },
  methods: {
    makeOrder() {
      this.isWindow = !this.isWindow
    },
    eventclick() {
      this.isActive = !this.isActive
      
    },

    //  async delete() {
    //     console.log('key')
    //     this.delNotice()
    //   },

    ...mapActions('goods', [
      'requestData',
    ]),
    ...mapActions('notices', [
      'addnotice', 'delNotice'
    ]),

  },

  computed: {
    ...mapGetters('goods', ['GOODS', 'GOODSONCART', 'SUMPRODUCTPRICECART']),
    ...mapGetters('notices', ['notices'])

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

.dark::before {
  content: '';
  width: 100%;
  height: 100%;
  background: black;
  position: absolute;
  z-index: 1;
  opacity: .3;

}

.cart {
  position: absolute;
  color: white;
  background-color: #eb6fd6;
  right: 10px;
  top: 150px;
  padding: 15px;
}


.window {
  width: auto;
  height: 400px;
  padding: 30px;
  position: absolute;
  top: 300px;
  left: 300px;
  z-index: 2;
  background-color: white;
}
</style>