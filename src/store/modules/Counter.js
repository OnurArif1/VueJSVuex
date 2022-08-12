const state={
    counter:0
}

const getters={
    getDoubleCounter(state){
        return state.counter*2;
    },
    stringCounter(state){
        return state.counter + ".kez tıklandı";
    },
}

const mutations={
    increaseCounter(state){ 
        state.counter++;
    },
    decreaseCounter(state){
        state.counter--;
    }
}

const actions={
    increment({commit}){ //commit sayesinde mutations ' un içindeki fonk ulaşabilirsin
        commit("increaseCounter");
    },
    decrement({commit}){
        commit("decreaseCounter");
    },
    // incAsync({commit}){
    //     setTimeout(() => {
    //         commit("increaseCounter")
    //     }, 2000);
    // },  
    incAsync({commit},payload){ //bu da parametreli hali
        setTimeout(() => {
            commit("increaseCounter")
        }, payload.time);
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}