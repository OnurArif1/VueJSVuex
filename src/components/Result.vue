<template>
    <div>
        <p class="counter-container">Sayaç : {{ counter }}</p>
    </div>
</template>

<script>
export default {
    // props:["counter"], //böyle de yaparsın
    computed:{
        counter(){
            // return this.$store.state.counter * 2; //böyle de yaparsın  
            return this.$store.getters.getDoubleCounter; //en güzel böyle yaparsın
        }
    }
}
</script>

<style scoped>
    .counter-container{
        border: px solid #aa7f08;
        padding: 10px 5px;
        background-color: #fbbd08;
        font-size: 20px;
        color:#000;
    }
</style>