<template>
  <div>
    <appHeader></appHeader>
  <transition name="fade" mode="out-in"><router-view></router-view></transition>
  <appFooter></appFooter>
  </div>

</template>

<script>
import Header from './assets/Component/Share/Header'
import Footer from './assets/Component/Share/Footer'

export default {
  components : {
    appHeader : Header,
    appFooter : Footer,

  },
  created(){
    this.$store.dispatch("getTradeResult")
    this.$store.dispatch("initApp")
  }
}
</script>


<style>
  .fade-enter{
    opacity: 0;
  
}
  .fade-enter-active{
    transition: opacity .3s ease-out;
  }

  .fade-leave-active{
    opacity: 0;
    transition: opacity .3s ease-out;
  }
</style>