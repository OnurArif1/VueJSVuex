import Vue from 'vue';
import Vuex from 'vuex';
import Counter from './modules/Counter';
import * as mutations from './Mutations' //böyle import ederek mutations aslında objedir dedik ve bunun sayesinde allta tanımlarken bir daha curly bracked bırakmamıza gerek kalmadı
import * as getters from './Getters'; //böyle import ederek mutations aslında objedir dedik ve bunun sayesinde allta tanımlarken bir daha curly bracked bırakmamıza gerek kalmadı
import * as actions from './Actions'; 

Vue.use(Vuex); //bunun anlamı ben Vuex ' i projemde global olarak kullanmak istiyorum demektir

export const store=new Vuex.Store({
        //Bir vuex yapısı 4 ana başlıktan oluşur. Bunlar;
    //state: proje de kullanacağımız verileri tutan yerdir
    //getters:state üzerinde tutulan verileri return ile döndürerek proje üzerinde istediğimiz yerde kullanmamıza olanak sağlar
    //mutations:state üzerinde yer alan verilerimiz güncellememizi sağlar. senkron bir yapıdır
    //actions:asenkron yağıdır.projemizin veri tabanı veya API ile bağlantısı yapılır. gelen verinin mutations aracılığıyla state üzerinde değişikliği yapılır.
    state:{
        value:0
    },
    getters,    //getters.js dosyasında olan methodları getirip burada tanımladık
    mutations, //mutations.js dosyasında olan methodları geldik burada çağırdık
    actions, 
    modules:{
        Counter
    }
})
