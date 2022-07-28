<template>
    <form v-on:submit.prevent="makeOrder">
        <Input @inputValue='getName' :regExp="/^[a-zA-Z]+$/" :textErorr="'Имя должно быть написано только буквами'" />
        <Input @inputValue='getPhone' :regExp="/^\+[78]\(\d{3}\)\d{3}-\d{4}\b/"
            :textErorr="'Телефон должен быть формата +7(ХХХ)ХХХ-ХХХХ'" />
        <Input @inputValue='getMail' :regExp="/^[a-z]+[\.\-]*?[a-z]+\@[a-z]+\.ru/"
            :textErorr="'E-mail введен не верно'" />

        <input type="submit" class="input" v-bind:disabled="!disabledSumbit">
    </form>
</template>

<script>
import { mapActions } from 'vuex'
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
        makeOrder() {
            const data = { 'name': this.name, 'phone': this.phone, 'mail': this.mail, 'cart': this.goodsOnCart, 'sumCart': this.sumCart }

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
                text: 'Мы свяжемся с Вами в ближайшее время'
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
        disabledSumbit() {
            return !!(this.name && this.phone && this.mail)
        }

    }
}


</script>

<style>
.isvalid {
    border: 1px solid red;
}

.isvalidtext {
    display: none;
}
</style>