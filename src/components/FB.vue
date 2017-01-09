<template>
  <div id="test">
    <!-- <div class="fb-like" data-share="true" data-width="450" data-show-faces="true">
    </div> -->
    <!-- <div id="fb-root"></div> -->
   <!--  <div class="fb-login-button" data-max-rows="1" data-size="xlarge" data-show-faces="false" data-auto-logout-link="true" onlogin="FBLogin()"></div> -->
    <h1>{{ status }}</h1>
    <div v-show="status" class="fb-logout-button" data-max-rows="1" data-size="xlarge" data-show-faces="false" data-auto-logout-link="false" @click="FBLogout();"></div>
    <div v-show="!status" class="fb-login-button" data-max-rows="1" data-size="xlarge" 
    data-show-faces="false" data-auto-logout-link="false" @click="FBLogin();"></div>
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
      FB.login(function(response) {
        if (response.status === 'connected') {
          this.status = true;
          console.log("login successful!!");
        } else if (response.status === 'not_authorized') {
          // The person is logged into Facebook, but not your app.
          console.log("Not your app!!");
        } else {
          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.
          console.log("Not Login!!");
        }
      });
    },
    FBLogout(){
      FB.logout(function(response) {
        this.status = false;
        console.log("Logout successful!!")
      });
    }   
  },
    created: function() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '107259369781545',
        xfbml      : true,
        version    : 'v2.8'
      });

      //This function should be here, inside window.fbAsyncInit
      FB.getLoginStatus(function(response) {
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
