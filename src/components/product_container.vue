<template>
  <div id="product_box" class="row">
    <product-card v-for="item in card" :cardbox="item"></product-card>
  </div>
</template>
<!-- components/product_container.vue -->

<script>

import ProductCard from './product_card'
export default {
  components: {
    ProductCard
  },
  props: {
    // attribute name: Type
    ccid: Number,
  },
  data(){
  	return{
  		card:[],
  	}

  },
  methods:{
    getcard:function(){
    var tmp_url ;
    if(this.ccid){
      tmp_url = "http://10.21.21.210:8080/api/product/"+this.ccid;
    }
    else{
      tmp_url = "http://10.21.21.210:8080/api/product/";
    }
    console.log(tmp_url)
    // console.log("http://10.21.21.210:8080/api/product/"+this.pid);
    this.$http.get(tmp_url)
        .then((response) => {
          //console.log(response.data)
          this.card=response.data
        })
        .catch(function(response) {
          console.log(response)
        })}
    
  },
  mounted(){
    this.getcard()
  }
}
</script>

<style scoped>
#product_box{
  
}
</style>
