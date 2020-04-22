<template>
    <div class="foot">
        <ul>
      <li><router-link to="/">
          <i class="iconfont icon-shouye"></i>
      <span>首页</span></router-link></li>
      <li><router-link to="/catgory">
          <i class="iconfont icon-fenlei"></i>
          <span>分类</span></router-link></li>
      <li><router-link to="/cart">
          <i class="iconfont icon-gouwuchekong"></i>
          <span>购物车</span></router-link></li>
      <li><router-link to="/mine">
          <i class="iconfont icon-denglu"></i>
          <span>我</span></router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
   
}
</script>
<style scoped>
.foot{
    height: 1rem;
    background-color: rgb(255, 255, 255);
    border-top: 1px solid #a8a8a8;
}
.foot ul{
    display: flex;
    justify-content: space-around;
}
.foot ul li{
    line-height: .46rem;
    text-align: center;
    font-size: .2rem;
    
}
.foot ul li a{
    text-decoration: none;
    display: flex;
    flex-direction: column;
    color: #000;

}
.foot ul li i{
line-height: .55rem;
 font-size: .4rem;
 color: #666666;
}
.router-link-exact-active{
    color: #ff9900 !important;
}
.router-link-exact-active i{
    color: #ff9900 !important;
}
</style>