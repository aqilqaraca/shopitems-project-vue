<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mb-5 card mt-5 shadow">
                <div class="card-body">
                    <h3>Product List</h3>
                    <hr>
                    <table class="table table-hover table-striped table-bordered" v-if="getProducts.length>0">
                        <thead>
                        <tr><th>id</th>
                        <th>Product Name</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Description</th>
                        </tr></thead>
                        <tbody>
                        <tr v-for="product in getProducts" :key="product.key">
                            <td class="align-middle text-center"><span class="badge badge-info"> {{product.key}} </span></td>
                            <td class="align-middle text-center"> {{product.title}} </td>
                            <td class="align-middle text-center" :class="getCountClasses(product.count)"> {{product.count}} </td>
                            <td style="width: 120px;"> {{product.price | currency}}</td>
                            <td class="align-middle"> {{product.description}}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="alert alert-warning" v-else>
                        <strong>We haven't found a record here yet</strong>
                        <br>
                        <small>You can use the Product Processes menu to add records
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed : {
        ...mapGetters(["getProducts"])
    },
    methods : {
        getCountClasses(value){
            return{
                'btn-danger text-white' : value==0 || value ==null,
                'btn-success text-white' : value>0

            }
        }
    }
}
</script>