//actions ile mutations benzer yapılardır fark şu; action asenkron çalışmayı destekler. Genellikle API çağrılarında kullanılır,
export const  setValueData=({commit},payload)=>{
    commit("setValue",payload);
}