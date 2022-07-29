<template>

    <div class="wrapper" :class="{ dark: !isWindow }">
      <div class="content">
        <header class="header">
          <div class="header-container">
            <div class="logo"> BrandShop </div>
            <div class="cart" :class="{ invisible: isActive }">
              <CartList />
              <Button @myEvent="visibleForm" v-if="GOODSONCART.length">Оформить заказ</Button>
            </div>
            <Button @myEvent="eventclick">

              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            </Button>
          </div>
        </header>

        <main>
          <h1>Каталог</h1>
          <GoodList />
        </main>
      </div>

      <footer>
        <div class="footer-text">
          <p> 2004-2022 © BrandShop — модный интернет-магазин обуви. Все права защищены. Доставка по всей России. </p>
        </div>

      </footer>
      <div class="window" :class="{ invisible: isWindow }">
        <Button @myEvent="visibleForm">Закрыть</Button>
        <Form :goodsOnCart="GOODSONCART" :sumCart="SUMPRODUCTPRICECART" @closeForm="visibleForm" />
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
      isWindow: true
    }
  },
  methods: {
    visibleForm() {
      this.isWindow = !this.isWindow
    },

    eventclick() {
      this.isActive = !this.isActive

    },

    ...mapActions('goods', [
      'requestData',
    ])

  },

  computed: {
    ...mapGetters('goods', ['GOODS', 'GOODSONCART', 'SUMPRODUCTPRICECART'])

  },
  mounted() {
    this.requestData()
  }

};
</script>

<style lang="scss" module>
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

html,
body {
  font: 100% $font-stack;
  color: $primary-color;
  margin: 0px;
  padding: 0px;
  height: 100%;

  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;

    .content {
      flex: 1 0 auto;

      .header {
        min-height: 100px;
        background: linear-gradient(to right, #cb11ab 0, #481173 100%) no-repeat;
        position: relative;


        .header-container {
          max-width: 1500px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 25px 25px 0;
          margin: 0 auto;

          .logo {
            color: white;
            padding: 30px;
            font-size: 40px;
          }

          .cart {
            color: white;
            font-weight: bold;
            padding: 15px;
            position: absolute;
            background-color: #eb6fd6;
            right: 10px;
            top: 150px;
            padding: 15px;
            width: 50%;
          }

        }

      }

      .header::after {
        content: '';
        display: block;
        width: 100%;
        height: 24px;
        border-radius: 24px 24px 0 0;
        background: #fff;
        position: absolute;
        bottom: -1px;
        left: 0;
      }
    }

    main {

      max-width: 1500px;
      padding: 0px 0 25px 10px;
      margin: 0 auto;


    }
  }




  footer {
    min-height: 100px;
    background: linear-gradient(to right, #cb11ab 0, #481173 100%) no-repeat;
    position: relative;
    flex: 0 0 auto;

    .footer-text {
      padding: 30px;
      color: white;
    }
  }

  footer::before {
    content: "";
    display: block;
    background: #fff;
    border-radius: 0 0 24px 24px;
    width: 100%;
    height: 24px;
    position: absolute;
    top: -1px;
    left: 0;
  }

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