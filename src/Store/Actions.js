import Vue from 'vue'

export const setTradeResult = ({state , commit} , tradeResult) =>{
    commit("UpdateTradeResult" ,tradeResult)
    let tradeData = {
        purchase : state.purchase,
        sale : state.sale
    }
    Vue.http.put("https://products-5ad82-default-rtdb.firebaseio.com/trade-result.json",tradeData)
    .then(response=>{
        console.log(response)
    })
}   

export const getTradeResult = ({commit}) =>{
    Vue.http.get("https://products-5ad82-default-rtdb.firebaseio.com/trade-result.json")
    .then(response=>{
        commit("UpdateTradeResult",response.data)
    })
}