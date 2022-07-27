<template>
    <form v-on:submit.prevent="onSubmit">
        <input type="text" class="input" :class="{ isvalid: isValidname }" v-on:input="validName" v-model="name">
        <p :class="{ isvalidtext: !isValidname }">Имя должно быть написано только буквами</p>
        <input type="text" class="input" :class="{ isvalid: isValidphone }" v-on:input="validPhone" v-model="phone">
        <p :class="{ isvalidtext: !isValidphone }">Телефон должен быть формата +7(ХХХ)ХХХ-ХХХХ </p>
        <input type="text" class="input" :class="{ isvalid: isValidmail }" v-on:input="validMail" v-model="mail">
        <p :class="{ isvalidtext: !isValidmail }">E-mail введен не верно </p>
        <input type="submit" class="input">
    </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        goodsOnCart: Array,
        sumCart: Number
    },

    data() {
        return {
            name: '',
            phone: '',
            mail: '',
            isValidname: false,
            isValidphone: false,
            isValidmail: false,

        }
    },

    methods: {
        onSubmit() {
            const data = { 'name': this.name, 'phone': this.phone, 'mail': this.mail, 'cart': this.goodsOnCart, 'sumCart': this.sumCart }
            const validForm = !this.isValidname && !this.isValidphone && !this.isValidmail

            if (validForm) {
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
            }

            this.name = ''
            this.phone = ''
            this.mail = ''

            this.$emit('formAction')
            this.clearCart()

            this.$notify({
                group: 'foo',
                title: 'Important message',
                text: 'Hello user! This is a notification!'
            });
        },

        validName() {
            if (this.name.match(/^[a-zA-Z]+$/) || !this.name) {
                this.isValidname = false
                return
            }
            this.isValidname = true
        },

        validPhone() {
            if (this.phone.match(/^\+[78]\(\d{3}\)\d{3}-\d{4}\b/) || !this.phone) {
                this.isValidphone = false
                return
            }
            this.isValidphone = true
        },

        validMail() {
            if (this.mail.match(/^[a-z]+[\.\-]*?[a-z]+\@[a-z]+\.ru/) || !this.mail) {
                this.isValidmail = false
                return
            }
            this.isValidmail = true
        },

        ...mapActions('goods', [
            'clearCart'
        ]),

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