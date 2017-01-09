<template>
  <div id="test">
    <div class="fb-like" data-share="true" data-width="450" data-show-faces="true">
    </div>
  </div>


</template>

<script>

export default {
  name: 'fb',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    created: function() {
    console.log('created main');
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '107259369781545',
        xfbml      : true,
        version    : 'v2.8'
      });

      //This function should be here, inside window.fbAsyncInit
      FB.getLoginStatus(function(response) {
        console.log(response);
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
