<!--temel olarak vuex 'in yaptığı iş state'leri saklamaktır.state; data içinde sakladığımız bütün verileri state olarak tanımlayabiliriz. Vuex bunların aplication seviyesinde saklıyor ve bunun adına central store deniyor-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1 class="text-center">VUEX</h1>
        <hr>
        <result :counter="counter"/>
        <hr>
        <secondResult :counter="counter"/>
        <hr>
        <counter @counterEvent="counter+=$event"/>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Result from './components/Result.vue'
import SecondResult from './components/SecondResult.vue'

export default {
  data(){
    return{
      counter:0
    }
  },
  components:{
    "result":Result,
    "counter":Counter,
    "secondResult":SecondResult
  },
}
</script>

<style>

</style>
