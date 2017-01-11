<template>
    <ul class="dropdown-menu">
   		<li v-for="item in nav"><a v-bind:href="'../display/'+item.CID">{{ item.Name}}</a></li>
  	</ul>
</template>

<script>


export default {
  props: {
    // attribute name: Type
    cid: Number,
  },
  data(){
  	return{
  		nav:[]
  	}

  },
  mounted(){
    this.$http.get("http://10.21.21.210:8080/api/classification/0/"+this.cid)
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