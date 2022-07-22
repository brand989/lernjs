<template>
  <div>
    <header class="header">
      <div v-bind:class="[logo]"> My shop </div>
      <div v-bind:class="{ cart: isActive }"></div>

      <Button :name="nameButton" @myEvent="eventclick" />
      <!-- <Cart /> -->Корзина

    </header>
    <main>
      <h1>Товары</h1>
      <div class="todo-item" v-for="item in GOODS" :key="item">{{ item }}</div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Button from './Button.vue'


export default {
  components: {
    Button
  },
  data() {
    return {
      logo: 'logo',
      isActive: true,
      nameButton: 'купить',
      num: 3,
    }
  },
  methods: {
    eventclick() {
      this.addInGoods(`good${this.num}`)
      this.num++
    },

    ...mapActions('goods', [
      'addInGoods',
    ]),

  },

  computed: {
    ...mapGetters('goods', ['GOODS']),
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
</style>