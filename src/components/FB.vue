<template>
  <div id="test">
    <button v-show="!status" @click="FBLogin();">Login</button>
    <button v-show="status" @click="FBLogout();">Logout</button>
  </div>


</template>

<script>

export default {
  name: 'fb',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      status: false,
    }
  },
  methods:{
    FBLogin(){
      
      FB.login((response)=>{
        if (response.status === 'connected') {
          this.status=true;
        } else if (response.status === 'not_authorized') {
          this.status=false;
        } else {
          this.status=false;
        }
      });
      
    },
    FBLogout(){
      var tmp_status;
      FB.logout((response)=> {
        this.status=false;
        console.log("Logout successful!!")
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
      FB.getLoginStatus((response)=> {
        console.log(response);
        if (response.status == "connected") {
          this.status = true;
          // window.location = '../Display';
        }
        else{
          this.status = false;
        }
     });

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
