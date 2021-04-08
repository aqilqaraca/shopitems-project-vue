<template>
    <div class="container">
        <div class="loading" :style="isLoading">
    <div class="lds-ripple">
        <div></div>
        <div></div>
    </div>
</div>
    <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
            <div class="card-body">
                <h3>Ürün Çıkışı</h3>
                <hr>
                <div class="form-group">
                    <label>Ürün Adı</label>
                    <select class="form-control" v-model="selectedProduct" @change="productSelected">
                        <option selected disabled>Select one option</option>
                        <option v-for="product in getProducts" :disabled="product.count == 0" :key="product.key" :value="product.key">{{product.title}}</option>
                    </select>
                </div>
                <transition name="fade" mode="out-in">
                    <div class="card mb-2 border border-danger" v-if="productM !== ''">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 text-center">
                                <div class="mb-3">
                                    <span class="badge badge-info">Stock : {{productM.count}}</span>
                                    <span class="badge badge-primary">Price : {{productM.price | currency}}</span>
                                </div>
                                <p class="border border-warning p-2 text-secondary">{{productM.description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </transition>
                <div class="form-group">
                    <label>Adet</label>
                    <input type="number" v-model="product_count" class="form-control" :class="bigCount(productM.count)" placeholder="Ürün adetini giriniz..">
                    <label style="color: red" v-if="!checkcount(productM.count) && !product_count == ''">Do not exceed the number of pieces</label>
                </div>
                <hr>
                <button :disabled="!saveEnabled" @click="save" class="btn btn-primary">Kaydet</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            selectedProduct : null,
            productM : "",
            product_count : null,
            saveButtonClick : false,
            check : false

        }
    },
    computed : {
        ...mapGetters(["getProducts"]),
        isLoading(){
            if(this.saveButtonClick){
                return{
                    display : "block"
                }
            }else{
                return{
                display : "none" }
            }
        },
        saveEnabled(){
            if(this.selectedProduct !==null && this.product_count > 0 ){
                return true
            }else{
                return false
            }
        },
    },
    methods : {
        productSelected(){
            this.productM = this.$store.getters.getProduct(this.selectedProduct)[0]
        },
        save(){
            let product = {
                key : this.selectedProduct,
                count : this.product_count 
            }
            this.$store.dispatch("sellProduct",product)
            this.saveButtonClick = true
        },
        bigCount(val){
            let countparse = parseInt(val)
            if(countparse < this.product_count){
                return 'is-invalid'
            }
            else if(countparse >= this.product_count){
                return 'is-valid'
            }
        },
        checkcount(val){
            let countparse = parseInt(val)
            if(countparse < this.product_count ){
                return false
            }
            else if(countparse >= this.product_count){
                return true
            }
        }
    },
    beforeRouteLeave(to,from,next){
        if((this.selectedProduct !== null || this.product_count > 0) && !this.saveButtonClick){
            if(confirm("Data doesn't save. Are you sure you want to quit?")){
                next()
            }
            else{
                next(false)
            }
        }else{
            next()
        }
    }
}
</script>

<style scoped>
    .border-danger{
        border-style: dashed!important;
    }
</style>