<template>

<!--     <button v-show="!status" @click="FBLogin();">Login</button>
    <button v-show="status" @click="FBLogout();">Logout</button> -->
  	<router-view></router-view>
  
</template>

<script>

export default {
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
      console.log('aaa')
    window.fbAsyncInit = ()=> {
      FB.init({
        appId      : '107259369781545',
        xfbml      : true,
        version    : 'v2.8'
      	});
	}
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

<style>
@import url(http://fonts.googleapis.com/earlyaccess/cwtexfangsong.css);
  html,body{
    height: 100%;
    /*background-color: #ace;*/
    padding: 0px;
    margin: 0px;
    font-family: 'cwTeXFangSong', 'Russo One', cursive , serif;
    font-family: ;
  }

</style>