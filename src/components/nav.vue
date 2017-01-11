<template>
  <nav class="navbar navbar-inverse">
    <ul class="nav navbar-nav">
      <li class="dropdown" v-for="item in nav">

      <a  class="dropdown-toggle" data-toggle="dropdown">{{ item.Name}}</a>
        <navchild :cid="item.CID"/>
        
      </li>

    </ul>
  </nav>
</template>

<script>

import Navchild from './navchild'
export default {
  components: {
    Navchild
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