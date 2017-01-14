<template>
  <div id="home">
    <h1>暨大二手拍賣平台</h1>
    <img src="../img/auction.png" alt="" width="25%" height="25%">
    <p>期望能帶動物品的流動，不要流於浪費</p>
    <img src="" alt="">
    <f-b :status='true'></f-b>
  </div>
</template>

<script>

import FB from '../components/FB'
export default {
  name: 'app',
  components: {
    FB
  },
}
</script>

<style>
#home{
	height: 100%;
	padding: 0px;	
	text-align: center;
	background-image: url("http://pic39.nipic.com/20140323/2126883_231904582000_2.jpg");
    background-size:cover;
}
#home>h1{
	padding-top: 10%;
	font-size: 100px;
	margin: 0px;
}
#home>p{
	padding-top: 5%;
	
	font-size: 30px;
}
</style>
