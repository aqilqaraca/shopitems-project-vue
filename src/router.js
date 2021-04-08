import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from './assets/Component/Products/ProductList'
import ProductSell from './assets/Component/Products/ProductSell'
import ProductPurchase from './assets/Component/Products/ProductPurchase'

Vue.use(VueRouter)

const routes = [
    {path : "/" , component : ProductList},
    {path : "/product-processing", component : ProductPurchase},
    {path : "/product-output", component : ProductSell},
    {path : "*" , redirect : "/"}
]

export const router = new VueRouter({
    mode : "history",
    routes

})