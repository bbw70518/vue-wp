<template>
  <div id="app">
    <navbox></navbox> 
    <h1>商品陳列</h1>
    <product-container :ccid="parseInt($route.params.cid)"></product-container>
    <own-footer></own-footer>  
  </div>
</template>
<!-- pages/Display.vue -->

<script>

//import FB from '../components/FB'

import Navbox from '../components/nav'
import ProductContainer from '../components/product_container'
import OwnFooter from '../components/footer'

export default {
  name: 'app',
  components: {
    Navbox,
    ProductContainer,
    OwnFooter
  },
  data(){
    return {
      nav:[]
    }
  },
  created(){
    console.log(this.$route.params.cid|0 )
  }
}
</script>

<style>
  h1 {
    text-align: center;
  }
</style>
