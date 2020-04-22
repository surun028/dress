<template>
    <div class="content">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/img/banner_01.jpg" alt=""></div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">
              <img src="../assets/img/banner_01.jpg" alt=""></div>
            <div class="swiper-slide">Slide 4</div>
        </div>
    </div>
        <!-- <img src="../assets/img/banner_01.jpg" alt=""> -->
        <input type="text" class="search" placeholder="Montagne jeunesse">
         <i class="iconfont icon-11"></i>
    </div>
   <div class="hot" v-for="(item,ind) in arr" :key="ind">
           <div class="ico">
            <img src="../assets/img/ic2.jpg" alt="">
            <span class="hot-title">{{item.name}}</span>
            </div>
             <ul class="hot-goods">
                <li v-for="litem in item.list" :key="litem.id" @click="fn(litem.id)">
                    <a href="#">
                   <img :src="litem.thumbnail" alt=""> 
                   <p class="price">&yen;{{litem.reduct_price}}<span>&yen;{{litem.original_price}}</span></p>
                   <h3>{{litem.name}}</h3>
                    </a>
                </li>
            </ul>
        </div> 

    
        
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    data(){
        return{
          arr:[]
        }
    },
    created(){
      this.$axios.get("/api/getIndexData").then(res=>{
         console.log(res.data);
      if (res.data.code == 200) {
        this.arr = res.data.data;
      }
      });
    },
    mounted(){
       var swiper = new Swiper('.swiper-container',{
         autoplay:true
       });
      //  console.log(swiper)
  },
  methods:{
    fn(id){
      this.$router.push({name:'detail',params:{id:id}})
    }
  }
}
</script>
<style scoped>
@import url(../../node_modules/swiper/css/swiper.min.css);
@import url(../assets/swiper.css);
.content{
    background-color: #fafafa;
}
.banner{
    height: 4.7rem;
     position: relative;
     overflow: hidden;
}
.banner img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
.banner .search {
  position: absolute;
  top: .6rem;
  left: 50%;
  margin-left: -2.58rem;
  width: 5.16rem;
  height: 0.6rem;
  border-radius: 0.11rem;
  padding: 0 0.22rem;
  font-size: 0.28rem;
  box-sizing: border-box;
  outline: none;
  z-index: 8;
}
.banner .icon-11{
  position: absolute;
  top: .68rem;
  left: 5.75rem;
  color: #000 !important;
  font-size: .35rem;
  z-index: 9;

}
/*今日疯抢*/
.hot {
  padding:0 0.2rem;
}
.hot .ico{
    vertical-align:baseline ;
}
.ico img{
    width: .28rem;
    margin-right: .2rem;

}
.hot-title {
  font-size: 0.28rem;
  color: #333333;
  font-family: "宋体";
  height: 0.96rem;
  line-height: 0.96rem;
  background-size: 0.3rem auto;
  padding-left:0 0.2rem;
}
.hot-goods{
  display: flex;
  justify-content: space-between;
    background-color: #fafafa;
    overflow: hidden;
    width: 98%;
    margin: 0 auto;

}
.hot-goods li {
  float: left;
  width: 3.26rem;
  height: 4.65rem;
  border: 1px solid #efefef;
  background-color: #ffffff;
  /* margin-right: 0.3rem; */
}
.hot-goods li a>img {
  width: 2.28rem;
  height: auto;
  margin: 0.5rem 0 0.48rem 0.5rem;
}
.hot-goods li a p {
  color: #ffa002;
  margin-left: 0.2rem;
}
.hot-goods li a p span {
  color: #666666;
  font-size: 0.26rem;
  margin-left: 0.82rem;
  text-decoration: line-through;
}
.hot-goods li a .price {
  color: #e60012;
}
.hot-goods li a h3 {
  font-size: 0.28rem;
  line-height: 0.39rem;
  margin: 0.16rem 0.2rem 0;
  font-weight: normal;
  color: #666666;
}
</style>