<template>
    <div>
        <p class="name-input">{{ name }}</p>
        <input type="text" class="input" :class="{ isvalid: isValid }" v-on:input="valid" v-model="valueInput">
        <p class="textErorr" :class="{ isvalidtext: !isValid }">{{ textErorr }}</p>
    </div>

</template>

<script>
export default {
    props: {
        regExp: String,
        textErorr: String,
        name: String
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

<style lang="scss">
.isvalid {
    border: 2px solid #ad0e93;
}

.isvalidtext {
    display: none;
}

.input {
    height: 40px;
    min-width: 400px;
    padding-left: 15px;

    @media screen and (max-width: 720px) {
        min-width: 200px;
    }

    &:focus-visible,
    &:active,
    &:focus {
        box-shadow: none;
        outline: none;
        border: 2px solid #ad0e93;
    }
}

.name-input {
    margin: 8px 0px;
}

.textErorr {
    margin: 2px;
    font-size: 10px;
    color: #ad0e93;
}
</style>