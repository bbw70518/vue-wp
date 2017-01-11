<template>
  <div id="product_singal" class="col-md-3">
    <p>{{ cardbox.Name}}</p>
    <span>NTD {{ cardbox.Price}}</span>
    <img v-if="cardbox.Picture" v-bind:src="'http://10.21.21.210:8080/api/img/img-'+cardbox.PID+'.jpg'" alt="route error">
    <button v-if="!cardbox.Buyer_mid" class="btn btn-success btn-lg" @click="Buy();">訂購</button>
    <button v-if="cardbox.Buyer_mid" class="btn btn-danger btn-lg">訂購中</button>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    // attribute name: Type
    cardbox: Object,
  },
  methods:{
    Buy(){
      //this.$http.options.emulateJSON = true;
      console.log(this.$http)
      // $.ajax({
      //   type: "PUT",
      //   url: "http://10.21.21.210:8080/api/buyer/2",
      //   data: JSON.stringify({pid:17}),// now data come in this function
      //   contentType: "application/json; charset=utf-8",
      //   crossDomain: true,
      // })
      //   .done(function( msg ) {
      //     console.log(msg)
      //   });
      console.log('post')
      this.
      // this.$http.post("http://10.21.21.210:8080/api/buyer/2")
      // .then((response) => {
      //  console.log(response) 
      // })

     // console.log(this.$parent.card=[])
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
  #product_singal{
    display: inline-block;
    /*background-color:blue; */
    border: 5px solid black;
    font-size: 25px;
    color:black;
    height:500px; 
  }
  #product_singal>img{
    width: 100%;
  }
  #product_singal>span{
    color:red;
    font-size: 20px;
    text-align: center;
  }
  #product_singal>button{
    position: absolute;
    bottom: 15px;
    right: 10px;
  }
</style>
