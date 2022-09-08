<template>

    <form class="form" v-on:submit.prevent="makeOrder">
        <Input @inputValue='getName' :regExp="/^[a-zA-Z]+$/" :textErorr="'Имя должно быть написано только буквами'"
            :name="'Имя'" />
        <Input @inputValue='getPhone' :regExp="/^\+[78]\(\d{3}\)\d{3}-\d{4}\b/"
            :textErorr="'Телефон должен быть формата +7(ХХХ)ХХХ-ХХХХ'" :name="'Телефон'" />
        <Input @inputValue='getMail' :regExp="/^[a-z]+[\.\-]*?[a-z]+\@[a-z]+\.ru/" :textErorr="'E-mail введен не верно'"
            :name="'Электронная почта'" />
        <input type="submit" class="input-submit" v-bind:disabled="!disabledSumbit" value="Оформить заказ">
     
    </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Input from './Input.vue'

export default {
    components: {
        Input
    },

    props: {
        goodsOnCart: Array,
        sumCart: Number
    },

    data() {
        return {
            name: '',
            phone: '',
            mail: '',
        }
    },

    methods: {

        addIdGoods(arr) {

            return arr.map((item) => {
                item.idGood = this.GOODS[item.id]._id
                return item
            })


        },



        makeOrder() {

            const goodsOrders = this.addIdGoods(this.goodsOnCart)

            const data = { 'name': this.name, 'phone': this.phone, 'mail': this.mail, 'cart': goodsOrders, 'sumCart': this.sumCart }

            fetch('/itemslist/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    console.log(res)
                })

            this.clearForm()
            this.clearCart()
            this.$emit('closeForm')

            this.$notify({
                group: 'foo',
                title: 'Спасибо за Ваш заказ',
                text: 'Мы свяжемся с Вами в ближайшее время',

            });


        },

        clearForm() {
            this.name = ''
            this.phone = ''
            this.mail = ''
        },

        ...mapActions('goods', [
            'clearCart'
        ]),



        getName(data) {
            if (data) {
                this.name = data.value
            } else {
                this.name = ''
            }
        },

        getPhone(data) {
            if (data) {
                this.phone = data.value
            } else {
                this.phone = ''
            }
        },

        getMail(data) {
            if (data) {
                this.mail = data.value
            } else {
                this.mail = ''
            }
        }

    },

    computed: {
        ...mapGetters('goods', ['GOODS', 'GOODSONCART']),

        disabledSumbit() {
            return !!(this.name && this.phone && this.mail)
        }

    }
}


</script>

<style lang="scss">
.form {
    background-color: white;
    padding: 20px;
}

.isvalidtext {
    display: none;
}

.input-submit {
    background-color: #ad0e93;
    border-radius: 3px;
    box-shadow: inset 5px black;
    display: inline-block;
    padding: 5px;
    margin: 3px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    padding: 15px;
    outline: none;
    border: none;
    position: absolute;
    right: 15px;
    bottom: 15px;

    &:hover {
        background-color: #cb11ab;
    }

    &:active {
        background-color: #ad0e93;
    }
}
</style>