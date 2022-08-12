<template>
    <div>
        <!-- <button class="btn btn-success" @click="incrementCounter">+Arttır</button> -->
        <button class="btn btn-success" @click="increaseCounter">+Arttır</button> <!--mapMutations sayesinde iş yükünden kurtulduk-->
        <!-- <button class="btn btn-danger" @click="decrementCounter">-Azalt</button> -->
        <button class="btn btn-danger" @click="decreaseCounter">-Azalt</button>
        <hr>
        <button class="btn btn-success" @click="increment">+Arttır</button>
        <button class="btn btn-danger" @click="decrement">-Azalt</button>
        <hr>
        <!-- <button class="btn btn-success" @click="incrementAsync">+Async Arttır</button> -->
        <!-- <button class="btn btn-success" @click="incAsync">+Async Arttır</button> -->
        <button class="btn btn-success" @click="incAsync({time:1000})">+Async Arttır</button>
    </div>
</template>

<script>
import {mapMutations,mapActions} from "vuex"; 
export default {
    methods:{
        ...mapMutations([
            "increaseCounter",
            "decreaseCounter"
        ]),
        ...mapActions([
            "increment",
            "decrement",
            "incAsync"
        ])
        // increment(){
        //     this.$store.dispatch("increment");
        // },
        // decrement(){
        //     this.$store.dispatch("decrement")
        // },
        // incrementAsync(){
        //     this.$store.dispatch("incAsync");
        // },
        //******************************************************************** 
        // incrementCounter(){
        //     // this.$emit("counterEvent",1);
        //     // this.$store.state.counter++
        //     // this.$store.commit("updateCounter",1)
        //     this.$store.commit("increaseCounter");
        // },
        // decrementCounter(){
        //     // this.$emit("counterEvent",-1);
        //     // this.$store.state.counter--;
        //     // this.$store.commit("updateCounter",-1)
        //     this.$store.commit("increaseCounter");
        // }
    }
}
</script>