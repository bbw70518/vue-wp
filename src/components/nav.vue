<template>
  <nav class="navbar navbar-inverse">
    <ul class="nav navbar-nav">
      <li class="active"><a href="../Display"><h4>NCNU 二手拍賣</h4> <span class="sr-only">(current)</span></a></li>
      <li class="dropdown" v-for="item in nav">
        <a  class="dropdown-toggle" data-toggle="dropdown"><h4> {{ item.Name}}</h4></a>
        <navchild :cid="item.CID"/>
      </li>
    </ul>

    <ul class="nav navbar-nav navbar-right">
      <f-b :status='false'></f-b>
    </ul>
  </nav>

</template>

<script>

import Navchild from './navchild'
import FB from '../components/FB'

export default {
  components: {
    Navchild,
    FB
  },
  data(){
  	return{
  		nav:[]
  	}

  },
  mounted(){
    this.$http.get("http://10.21.21.210:8080/api/classification/0")
        .then((response) => {
          //console.log(response.data)
          this.nav=response.data
        })
        .catch(function(response) {
          console.log(response)
        })
  }
}
</script>

<style>
  .dropdown>a>h4{
    color: white;
  }
  .dropdown:hover {
    background-color: #FF8040;
  }
  .navbar-right {
    position: absolute;
    right: 2%;
    top: 15%;
  }
</style>