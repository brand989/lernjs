<template>
    <div class="button" @click="onBtnClick">
    <slot></slot>
    </div>
</template>

<script>
export default {
  
    methods: {
        onBtnClick() {
            this.$emit('myEvent')
        }
    }
}
</script>

<style>
.button {
    background-color: #ad0e93;
    border-radius: 3px;
    box-shadow: inset 5px black;
    display: inline-block;
    padding: 5px;
    margin: 3px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    padding: 20px;
}

.button:hover {
    background-color: #cb11ab;
}


.button:active{
    background-color:  #ad0e93;
}
</style>