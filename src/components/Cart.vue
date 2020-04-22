<template>
  <div class="cart">
    <div class="top">
      <i class="iconfont icon-fanhui2" @click="fn"></i>
      <h2>购物车</h2>
    </div>

    <div  v-if="cartArr.length>0">
    <div class="goods1" v-for="(item,index) in cartArr" :key="index">
      <div class="title">
        <i class="iconfont icon-dianpu1"></i>
        <h3>杭州保税区仓</h3>
      </div>
      <div class="choose">
        <i class="iconfont icon-quanxuan" :class="{'active':item.ischeck}" @click="ischecked(index)"></i>
        <div class="img">
             <img :src="item.imgurl" alt="">
        </div>
        <div class="middle">
         <span class="tit">{{item.name}}</span>
          <span>90粒装</span>
          <div class="info">
            <i class="redu" @click="reduN(index)">-</i>
            <i class="num">{{item.num}}</i>
            <i class="add" @click="addN(index)">+</i>
          </div>
        </div>
        <b class="price">￥{{item.price}}</b>
        <button @click="del(index)">删除</button>
      </div>
    </div>
    </div>
  <div v-else>
	购物车是空的
  </div>
    <!-- <div class="goods2">
      <div class="title">
        <i class="iconfont icon-dianpu1"></i>
        <h3>杭州保税区仓</h3>
      </div>
      <div class="choose">
        <div class="img">
             <img src="http://47.106.12.223:8569/static/img/02.png" alt="">
        </div>
        <div class="middle">
         <span class="tit">ChileLife/童年时光婴幼...  </span>
          <span>90粒装</span>
          <div class="info">
            <i class="redu" @click="redu">-</i>
            <i class="num">{{number}}</i>
            <i class="add" @click="add">+</i>
          </div>
        </div>
        <b class="price">￥118</b>
        <button>删除</button>
      </div>
    </div> -->
     <!-- 底部 -->
    <div class="jrcart">
      <div class="qx" @click="allCheck">
        <i class="iconfont icon-quanxuan" :class="{'active':allcheck}"></i>
        <span>全选</span>
      </div>
      <div class="bj">
        <i class="iconfont icon-bianji"></i>
        <span>编辑</span>
      </div>
      <div class="hj">
        <span>合计:</span>
        <i>{{total.sum}}</i>
        <br />
        <span>(不含运费)</span>
      </div>
      <button>去结算({{total.count}}件)</button>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      number: 1
    };
  },
  beforeRouteEnter(to,from,next){
        if(localStorage.getItem('user')){
			next();
		}else{
			next('/login')
		}
	 },
  computed:{
    ...mapState({
			cartArr:(state)=>{
				return state.cart.cartArr;
			}
		}),
    allcheck:{
      set(v){
        this.$store.commit('changeAll',v);
      },
      get(){
        var flag=this.cartArr.every(item=>{
					return item.ischeck
				})	
				return  flag;
      }
    },
    total(){
       var sum=0; var count=0;
			 this.cartArr.forEach(item=>{
				 if(item.ischeck){
					 sum += item.num*item.price;
					 count +=item.num;
				 }
			 })
			 
			 return  {sum:sum,count:count};
    }
  },
  
  methods: {
    fn() {
      this.$router.go(-1);
    },
    reduN(index){//-
      this.$store.dispatch('reduN',index)
    },
    addN(index){//+
      this.$store.commit('addN',index)
    },
    del(index){//删除
      this.$store.commit('del',index)
    },
    ischecked(index){
      this.$store.commit('isCheck',index);
    },
    allCheck(){
      this.allcheck=!this.allcheck;
    }
    
  }
};
</script>
<style  scoped>
.top {
  height: 1rem;
  line-height: 1rem;
  background-color: #ff9900;
  color: #fff;
}
.top h2 {
  text-align: center;
  font-weight: normal;
  font-size: 0.4rem;
  color: #fff;
}
.top i {
  position: absolute;
  font-size: 0.35rem;
  left: 0.4rem;
  color: #fff;
}
.jrcart {
  position: fixed;
  width: 100%;
  height: 1rem;
  background: rgb(255, 255, 255);
  bottom: 1.01rem;
  border-top: 1px solid #dddddd;
  display: flex;
}
.jrcart .qx,
.jrcart .bj {
  width: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.jrcart .qx i,
.jrcart .bj i {
  line-height: 0.6rem;
}
.jrcart .qx span,
.jrcart .bj span {
  font-size: 0.28rem;
  line-height: 0.35rem;
}
.jrcart .qx .icon-quanxuan{
  color: #000;
}
.jrcart .qx .active{
  color:rgb(236, 5, 5);
}
.jrcart .hj {
  width: 35%;
  background: #ffffff;
  color: #fff;
  text-align: center;
  padding: 0.15rem 0;
  color: #ddd;
}
.jrcart .hj span,
.jrcart .hj i {
  color: #dad6d3;
  font-size: 0.2rem;
}
.jrcart button {
  width: 25%;
  border: none;
  background: #ff5500;
  color: #fff;
}
.goods1{
background-color: #fafafa;
}
.goods2{
background-color: #f7f7f7;
}
 .title {
  display: flex;
  color: #afafaf;
  height: 1.1rem;
  line-height: 1.1rem;
  

}
 .title i {
  padding: 0 0.3rem;
  color: #afafaf;
}

 .title h3 {
  color: #afafaf;
  font-weight: normal;
  font-size: 0.26rem;
}
 .choose{
     position: relative;
     padding-left: .37rem;
    padding-bottom: .47rem;
    height: 1.7rem;
    display: flex;
}
 .choose>i{
   /* padding: 0 0 0 .37rem; */
   font-size: .4rem;
   line-height: 1.7rem;
   
}

 .choose .img{
    margin-top: .1rem;
    width: 1.6rem;
    height: 1.6rem;
    padding: 0 .14rem;
}
 .choose .img img{
    width: 100%;
}
 .choose .middle{
    width: 35%;
    padding:0 .2rem;
}
 .choose .middle .tit{
    font-size: .3rem;
    color: #000;
}
 .choose .middle span{
    font-size: .24rem;
    color: #a1a1a1;
}
 .choose .middle .info{
    height: .42rem;
    line-height: .42rem;
    border: 1px solid #a1a1a1;
    display: flex;
    margin-top: .4rem;
}
 .choose .middle .info i{
   flex: 1;
   text-align: center;
   font-size: .3rem;
   font-style: normal;
}
 .choose .middle .info .redu{
    border-right: 1px solid #a1a1a1;
}
 .choose .middle .info .add{
    border-left: 1px solid #a1a1a1;
}
 .choose .price{
    margin-top: .52rem;
    margin-left: .2rem;
}
.choose button{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1rem;
    height: 2.15rem;
    background-color: #ff9900;
    outline: none;
    border: none;
    color: #fff;
}
.choose .icon-quanxuan{
    font-size: .4rem;
}
.choose .active{
  color:rgb(236, 5, 5);
}
</style>