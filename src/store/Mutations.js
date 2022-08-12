//mutations;mutations denilen yapıları state içerisindeki verileri güncellerken kullanmaktayız. Buradaki her mutation type ve handler olmak üzere 2 yapı içermektedir. Type dediğimiz alan metot ismi, handler ise ilgili state üzerinde güncelleme işlemini yapacak metottur. 
export const setValue=(state,payload)=>{
    state.value=payload;
}
// updateCounter(state,value){ //bu şekilde tanımlayarak generic bir fonk tanımlamış olduk
//     state.counter+=value;
// }