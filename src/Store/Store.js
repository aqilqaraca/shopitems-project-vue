import Vuex from 'vuex'
import Vue from 'vue'
import Product from './Modules/Product'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './Actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        purchase : 0.0,
        sale : 0.0,
        balance : 0.0
    },
    getters,
    mutations,
    actions,
    modules : {
        Product
    }
})

