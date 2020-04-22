<template>
  <div class="app">
   <Head></Head>
   <div class="main">
     <router-view></router-view>
   </div>
    <Foot></Foot> 
  </div>
</template>
<script>
import Head from './components/Head'
import Foot from './components/Foot'
export default {
  components:{
    Head,
    Foot,
  }
 
}
</script>
<style>
*{
  margin:0;
  padding:0;
  list-style: none;
  font-size: .28rem;
  text-decoration: none;
  color: #000;

}

html,body{
  height:100%;
  background: #ffffff!important;
}
.app{
  height: 100%;
  display: flex;
  flex-direction:column;
}
input{
  border: none;
  outline: none;
}
.main {
  flex: 1;
  overflow: scroll;
}
</style>