<template>
  <div>
    <header class="header">
     <div v-bind:class="[logo]"> My shop </div>
      <div v-bind:class="{ cart: isActive }"><!-- <Cart /> -->Корзина</div>
    </header>
    <main>
      <h1>Товары</h1>

    </main>
  </div>
</template>

<script>

export default {
  data() { return {
    logo:'logo',
    isActive: true
  }
  },
  methods: {},
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