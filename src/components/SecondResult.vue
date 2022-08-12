<template>
    <div>
        <!-- <p class="counter-container">Sayaç : {{ counter }}</p> -->
        <!-- <p class="counter-container">Sayaç : {{ getDoubleCounter }}</p> -->
        <p class="counter-container">Sayaç : {{ double }}</p>
        <!-- <p class="counter-container">Tıklama Seviyesi : {{ stringCounter }}</p> -->
        <p class="counter-container">Tıklama Seviyesi : {{ stringC }}</p>
        <input type="text" v-model="value">
        <p>{{ value }}</p>
    </div>
</template>

<script>
import {mapGetters} from "vuex"; //mapGetters; Store.js içinde bulunan getters fonk içinde barındıran fonksiyondur. mapGetters bize obje olarak geri döner 
export default {
    // props:["counter"],
    // computed:{ böyle de tanımlanabilir
    //     counter(){
    //         // return this.$store.state.counter * 2;   
    //         return this.$store.getters.getDoubleCounter;
    //     },
    //     stringCounter(){
    //         return this.$store.getters.stringCounter;
    //     }
    // }

    // computed: mapGetters([ böyle de tanımlanabilir
    //     'getDoubleCounter',
    //     'stringCounter'
    // ])
    // computed:mapGetters({ //böyle de tanımlanabilir
    //     double:'getDoubleCounter',
    //     stringC:'stringCounter'
    // })
    computed:{ //bu tanımlama ile hem başka bir computed oluşturabilirsin hem de mapGetters ı kullanabililrsin
        ...mapGetters({
            double:'getDoubleCounter',
            stringC:'stringCounter'
        }),
        value:{
            get(){
                return this.$store.getters.getValue;
            },
            set(value){
                this.$store.dispatch("setValueData",value);
            }
        },
        customProp(){}
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