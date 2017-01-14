<template>
  <div id="product_singal" class="col-md-3">
    <h3>{{ cardbox.Name}}</h3>
    <span>NTD {{ cardbox.Price}}</span>
    <img v-if="cardbox.Picture" v-bind:src="'http://10.21.21.210:8080/api/img/img-'+cardbox.PID+'.jpg'" alt="route error">
    <button v-if="!cardbox.Buyer_mid" class="btn btn-success btn-lg" @click="Buy();">訂購</button>
    <button v-if="cardbox.Buyer_mid" class="btn btn-danger btn-lg">訂購中</button>
  </div>
</template>

<script>
import cookie from '../js/cookie'
export default {
  components: {
  },
  props: {
    // attribute name: Type
    cardbox: Object,
  },
  methods:{
    Buy(){
      
      this.$http.get("http://10.21.21.210:8080/api/buyer/put/"+this.cardbox.PID+"/"+cookie.get('e'))
      .then((response) => {
       this.$parent.getcard()
      })

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
    margin: 50px 40px;
    border: 5px solid black;
    font-size: 25px;
    color:black;
    height:500px;
    width: 300px;
  }
  #product_singal>img{
    position: absolute;
    bottom: 10%;
    left: 10px;
    height: 300px;
    width: 250px;
  }
  #product_singal>span{
    color:red;
    width: 100%;
    font-size: 20px;
    text-align: center;
  }
  #product_singal>button{
    position: absolute;
    bottom: 15px;
    right: 10px;
  }
</style>
