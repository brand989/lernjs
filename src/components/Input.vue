<template>
    <div>
        <input type="text" class="input" :class="{ isvalid: isValid }" v-on:input="valid" v-model="valueInput">
        <p :class="{ isvalidtext: !isValid }">{{textErorr}}</p>
    </div>

</template>

<script>
export default {
    props: {
        regExp: String,
        textErorr: String
    },

    data() {
        return {
            valueInput: '',
            isValid: false,
        }
    },
    
    methods: {
        valid() {
            if (this.valueInput.match(this.regExp) || !this.valueInput) {
                this.isValid = false
                this.$emit('inputValue', { value: this.valueInput })
                return
            }
            this.isValid = true

        },
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