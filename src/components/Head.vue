<template>
  <div class="head">
    <div class="icons">
      <!-- <span><i class="iconfont icon-fanhui2"></i></span>
      <span><i class="iconfont icon-gouwuche"></i></span>
      <span><i class="iconfont icon-gengduo1"></i></span> -->
    </div>
  </div>
  
</template>
<script>
export default {

}
</script>
<style scoped>
.head{
  height: .01rem;
  background: #fa4070;
}
.icons{
  position: fixed;
  top: .55rem;
  z-index: 8;
  padding: 0 .23rem;
  
}
.icons span{
  display:inline-block;
  text-align: center;
  width: .6rem;
  height: .6rem;
  line-height: .6rem;
  border-radius:50%;
  background-color: #b2b2b2;
}
.icons span i{
  position: relative;
  line-height: .6rem;
  font-size: .3rem;
  color: #fff;
  
}
.icons span:nth-child(2){
  margin-left:4.9rem;
}
.icons span:nth-child(3){
  margin-left:.2rem;
}
</style>>
