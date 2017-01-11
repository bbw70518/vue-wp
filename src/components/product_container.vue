<template>
  <div id="product_box" class="row">
    <product-card v-for="item in card" :cardbox="item"></product-card>
  </div>
</template>

<script>

import ProductCard from './product_card'
export default {
  components: {
    ProductCard
  },
  props: {
    // attribute name: Type
    pid: Number,
  },
  data(){
  	return{
  		card:[]
  	}

  },
  methods:{
    getcard:function(){
    var tmp_url ;
    if(this.pid){
      tmp_url = "http://10.21.21.210:8080/api/product/"+this.pid;
    }
    else{
      tmp_url = "http://10.21.21.210:8080/api/product/";
    }
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
