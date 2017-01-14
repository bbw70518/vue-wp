<template>
  <div id="test">
    <button v-show="status"  class="btn btn-success btn-lg" @click="FBLogin();">FB-Login</button>
    <button v-show="!status"  class="btn btn-danger btn-lg"@click="FBLogout();">FB-Logout</button>
  </div>


</template>

<script>
import cookie from '../js/cookie'
export default {
  name: 'fb',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  props: {
    // attribute name: Type
    status: Boolean,
  },
  methods:{
    FBLogin(){
      
      FB.login((response)=>{
        if (response.status === 'connected') {
          this.status=true;
          FB.api('/me', (response)=> {

         this.$http.get("http://10.21.21.210:8080/api/login/"+response.id)
        .then((response) => {
          console.log(response.data)
          cookie.set('e',response.data.MID,1);
          window.location = '../Display';
        })
        .catch(function(response) {
          console.log(response)
        })
                   //
         });
        
        } else if (response.status === 'not_authorized') {
          window.location = '../home';
        } else {
          window.location = '../home';
        }
      });
      
    },
    FBLogout(){
      var tmp_status;
      FB.logout((response)=> {
        this.status=false;
        if (response.status != 'connected') {
        }
      });
    }   
  },
    created: function() {
    window.fbAsyncInit = ()=> {
      FB.init({
        appId      : '107259369781545',
        xfbml      : true,
        version    : 'v2.8'
      });

      //This function should be here, inside window.fbAsyncInit
   };

    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
