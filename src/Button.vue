<template>
    <div class="button" @click="onBtnClick">{{ name }}</div>
</template>

<script>
export default {
    props: {
        name: String
    },
    methods: {
        onBtnClick() {
            this.$emit('myEvent')
        }
    }
}
</script>

<style>
.button {
    background-color: antiquewhite;
    border-radius: 3px;
    box-shadow: inset 5px black;
    display: inline-block;
    padding: 5px;
    margin: 3px;
    color: black;
    cursor: pointer;
}

.button:active {
    background-color: rgb(248, 207, 153);
}
</style>