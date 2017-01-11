<template>
  <div id="app">
  <!-- <h1>{{$route.params.cid }}</h1> -->
    <navbox></navbox> 
    <product-container :pid="parseInt($route.params.cid)"></product-container>
  </div>
</template>

<script>

//import FB from '../components/FB'

import Navbox from '../components/nav'
import ProductContainer from '../components/product_container'
export default {
  name: 'app',
  components: {
    Navbox,
    ProductContainer
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


