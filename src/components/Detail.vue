<template>
  <div class="detail">
     <div class="icons">
      <span @click="fh"><i class="iconfont icon-fanhui2"></i></span>
      <span @click="addcart"><i class="iconfont icon-gouwuche"></i></span>
      <span><i class="iconfont icon-gengduo1"></i></span>
    </div>
    <!-- 轮播图 -->
    <div v-if="!proObj">没有数据</div>
    <div v-else>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,ind) in proObj.swiperImgArr" :key="ind">
            <img :src="item" />
          </div>
        </div>
        <div class="swiper-pagination" style="width:100%; height:20px;"></div>
      </div>
    </div>

    <div class="describe">
      <h4 v-if="true">{{proObj.name}}</h4>
      <div class="rig">
        <i class="iconfont icon-shoucang-copy"></i>
        <span>收藏</span>
      </div>
    </div>

    <div class="price">
      <div class="le">
        <em>&yen;{{proObj.reduct_price}}</em>
        <span>&yen;{{proObj.original_price}}</span>
      </div>
      <div class="courier">
        <ul class="one">
          <li>{{proObj.allowance*100/10}}折</li>
          <li v-if="proObj.isFreeShip">包邮</li>
          <li v-else>不包邮</li>
        </ul>
        <ul class="two">
          <li v-for="(item,ind) in proObj.describe" :key="ind">{{item}}</li>
        </ul>
      </div>
    </div>

    <div class="description">
      <ul>
        <li @click="tab('spxq')">
          <span :class="{'active':tabname=='spxq'}">商品详情</span>
        </li>
        <li @click="tab('mjkb')">
          <span :class="{'active':tabname=='mjkb'}">买家口碑</span>
        </li>
      </ul>
      <!--商品详情-->
      <div v-if="tabname=='spxq'" class="sq">
        <img v-for="(item,ind) in proObj.shopDes" :src="item" :key="ind" />
      </div>
      <!--买家口碑-->
      <div v-if="tabname=='mjkb'" style="height: 100%; background-color:#fff;">
        <div class="navkb">
          <ul class="qh">
            <li @click="tabtwo('qbpj')" :class="{'active':tabnametwo=='qbpj'}">全部评价</li>
            <li @click="tabtwo('hp')" :class="{'active':tabnametwo=='hp'}">好评</li>
            <li @click="tabtwo('cp')" :class="{'active':tabnametwo=='cp'}">差评</li>
            <li @click="tabtwo('sd')" :class="{'active':tabnametwo=='sd'}">晒单</li>
          </ul>
          <div v-if="tabnametwo=='qbpj'" class="evaluate">
            <ul>
              <li v-for="(item,index) in proObj.buyerReviews.all" :key="index">
                <div class="xx">
                  <div class="head">
                    <h4>{{item.buyerName}}</h4>
                    <span>{{new Date(parseInt(item.createTime)).toLocaleDateString().replace(/\//g, "-") + " " + new Date(parseInt(item.createTime)).toTimeString().substr(0, 8)}}</span>
                  </div>
                  <span class="img" v-for="(itemr,ind) in item.postImg" :key="ind">
                    <img :src="itemr" />
                  </span>
                  <p>{{item.postDescribe}}</p>
                  <div class="admin">{{item.adminReviews}}</div>
                </div>
              </li>
            </ul>
          </div>
          <div v-if="tabnametwo=='hp'" class="evaluate">
            <ul>
              <li v-for="(item,index) in proObj.buyerReviews.good" :key="index">
                <div class="xx">
                  <div class="head">
                    <h4>{{item.buyerName}}</h4>
                    <span>{{new Date(parseInt(item.createTime)).toLocaleDateString().replace(/\//g, "-") + " " + new Date(parseInt(item.createTime)).toTimeString().substr(0, 8)}}</span>
                  </div>
                  <span class="img" v-for="(itemr,ind) in item.postImg" :key="ind">
                    <img :src="itemr" />
                  </span>
                  <p>{{item.postDescribe}}</p>
                  <div class="admin">{{item.adminReviews}}</div>
                </div>
              </li>
            </ul>
          </div>
          <div v-if="tabnametwo=='cp'" class="evaluate">
            <ul>
              <li v-for="(item,index) in proObj.buyerReviews.bad" :key="index">
                <div class="xx">
                  <div class="head">
                    <h4>{{item.buyerName}}</h4>
                    <span>{{new Date(parseInt(item.createTime)).toLocaleDateString().replace(/\//g, "-") + " " + new Date(parseInt(item.createTime)).toTimeString().substr(0, 8)}}</span>
                  </div>
                  <span class="img" v-for="(itemr,ind) in item.postImg" :key="ind">
                    <img :src="itemr" />
                  </span>
                  <p>{{item.postDescribe}}</p>
                  <div class="admin">{{item.adminReviews}}</div>
                </div>
              </li>
            </ul>
          </div>
          <div v-if="tabnametwo=='sd'" class="evaluate">
            <ul>
              <li v-for="(item,index) in proObj.buyerReviews.postForm" :key="index">
                <div class="xx">
                  <div class="head">
                    <h4>{{item.buyerName}}</h4>
                    <span>{{new Date(parseInt(item.createTime)).toLocaleDateString().replace(/\//g, "-") + " " + new Date(parseInt(item.createTime)).toTimeString().substr(0, 8)}}</span>
                  </div>
                  <span class="img" v-for="(itemr,ind) in item.postImg" :key="ind">
                    <img :src="itemr" />
                  </span>
                  <p>{{item.postDescribe}}</p>
                  <div class="admin">{{item.adminReviews}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
<!-- 加入购物车 和立即购买 -->
    <div class="jrcart">
      <div class="left">
        <span class="total">总价</span>
        <span class="price">&yen;0.00</span>
      </div>
      <button class="cart" @click="addCart">加入购物车</button>
      <button class="buyer" @click="isshow=true">立即购买</button>
    </div>
     <!-- 遮罩层 -->
    <transition
      enter-class
      enter-active-class="animated fadeIn"
      enter-to-class
      leave-class
      leave-active-class="animated fadeOut"
      leave-to-class
    >
      <Buynow v-show="isshow" @xyz="xyz" @abc="change" :prolist="proObj" @getselect="getSelect" :isshow="isshow"></Buynow>
    </transition>
  </div>
</template>
<script>
import Swiper from "swiper";
import Buynow from "./Buynow";
export default {
  components: {
    Buynow
  },
  data() {
    return {
      proObj: {},
      tabname: "spxq",
      tabnametwo: "qbpj",
      isshow: false,
      seletbuy:{
              '大小':'1L',
              '年龄':'5岁以下'
          },
      num:1
    };
  },
  created() {
    var id = this.$route.params.id;
    this.$axios({
      method: "get",
      url: "/api/getDetails?pid=" + id
    }).then(res => {
      // console.log(res.data.data,"详情页");
      this.proObj = res.data.data;
      console.log(this.proObj);
    });
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      autoplay: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },

  methods: {
    tab(v) {
      this.tabname = v;
    },
    tabtwo(v) {
      this.tabnametwo = v;
    },
    change() {
      this.isshow = false;
    },
    getSelect(v){
      this.seletbuy=v;
    },
    addCart(){
      this.isshow = false;

      var obj={
        pid:this.proObj.pid,
        name:this.proObj.name,
        imgurl:this.proObj.shopDes[0],
        price:this.proObj.reduct_price,
        uid:1,   
        num:this.num,
        seletbuy:this.seletbuy,
        ischeck:false
      }
      // this.$store.commit('add',obj)
      this.$store.dispatch('addCart',obj)
    },
    xyz(v){
      this.num=v
    },
    fh(){
       this.$router.go(-1);
    },
    addcart(){
      this.$router.push('/cart');
    }
  }
};
</script>
<style scoped>
@import url(../../node_modules/swiper/css/swiper.min.css);
@import url(../assets/swiper.css);

.detail {
  /* padding-bottom: .12rem; */
  background-color: rgb(255, 255, 255);
  /* border-bottom: .34rem solid #eeeeee; */
}
.describe {
  overflow: hidden;
  padding-top: 0.09rem;
  border-top: 1px solid #ddd;
}
.describe h4 {
  float: left;
  width: 5.86rem;
  font-size: 0.3rem;
  padding: 0 0.33rem 0 0.3rem;
  line-height: 0.56rem;
  font-weight: 500;
}
.describe .rig {
  float: left;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 0.16rem;
  color: #e71f19;
  height: 0.7rem;
  line-height: 0.35rem;
  width: 10%;
  margin-left: 0.14rem;
  border-left: 1px solid #dddddd;
}
.describe .rig > i {
  font-size: 0.35rem;
  color: #e71f19;
}
.describe .rig > span {
  color: #e71f19;
}

.price {
  display: flex;
  height: 1.03rem;
}
.price .le {
  display: flex;
  flex-direction: column;
  flex: 1.5;
  padding: 0.11rem 0.1rem 0.21rem 0.31rem;
}
.price .courier {
  flex: 7;
}
.price .le > em {
  color: #eb2222;
  font-size: 0.35rem;
  font-style: normal;
}
.price .le > span {
  color: #999999;
  font-size: 0.25rem;
  margin-top: 0.1rem;
  text-decoration: line-through;
}
.courier {
  display: flex;
  height: 1.03rem;
  font-size: 0.2rem;
  flex-direction: column;
}
.courier .one {
  flex: 1;
  margin-top: 0.13rem;
}
.courier .two {
  flex: 1;
  margin-top: 0.1rem;
}
.courier > .one > li {
  color: #fff;
  padding: 0.04rem 0.1rem;
  background-color: #ff9900;
  margin-right: 0.2rem;
  display: inline-block;
  font-size: 0.2rem;
}
.courier > .two > li {
  color: #ff9900;
  padding: 0.01rem 0.1rem;
  background-color: #fff;
  border: 0.02rem solid #ff9900;
  margin-right: 0.2rem;
  display: inline-block;
  font-size: 0.2rem;
}
/* 商品详情 */
.description {
  border-top: 32px solid #eeeeee;
}

.description ul {
  display: flex;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.22rem;
}
.description ul li {
  flex: 1;
}

.description ul li span {
  border-bottom: 2px solid #fff;
  padding: 0.1rem 0.24rem;
}
.description ul li .active {
  color: #ff9900;
  border-bottom: 2px solid #ff9900;
}
.description .sq img {
  margin: 0 auto;
  padding: 0 0.4rem;
  width: 90%;
  vertical-align: middle;
}

/* 最下面的加入购物车
 */
.jrcart {
  position: fixed;
  width: 100%;
  height: 0.9rem;
  background: rgb(255, 255, 255);
  bottom: 1.01rem;
  border-top: 1px solid #dddddd;
  display: flex;
}
.jrcart .left {
  flex: 1;
  display: flex;
  padding-left: 0.5rem;
  font-size: 14px;
}
.jrcart .left .total {
  color: #333;
}
.jrcart .left .price {
  color: #eb2222;
}
.jrcart .left span {
  height: 100%;
  line-height: 0.9rem;
}
.jrcart .cart {
  width: 25%;
  border: none;
  background: #ff9900;
  color: #fff;
}
.jrcart .buyer {
  width: 25%;
  border: none;
  background: #eb2222;
  color: #fff;
}

.evaluate ul {
  display: flex;
  flex-direction: column;
}
.evaluate ul li {
  padding-bottom: 0.2rem;
  border-bottom: 1px solid #dddddd;
  background-color: #fff;
}
.evaluate > ul > li > .xx {
  color: #999999;
  font-size: 0.18rem;
  padding: 0 0.3rem;
}
.evaluate > ul > li .head {
  display: flex;
  justify-content: space-between;
  height: 0.6rem;
  line-height: 0.6rem;
}
.evaluate > ul > li .head > h4 {
  color: #ff9900;
  font-size: 0.2rem;
}
.evaluate > ul > li p {
  text-align: left;
  height: 0.36rem;
  line-height: 0.36rem;
}
.evaluate > ul > li .admin {
  text-align: left;
  padding: 0.13rem 0.09rem;
  border-radius: 0.12rem;
  background-color: #dddddd;
  color: #666666;
}

.navkb {
  padding: 0 0.3rem;
  background-color: #fff;
  border-top: 1px solid #000;
}
.navkb > ul {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  padding: 0.1rem 0;
  height: 0.5rem;
  line-height: 0.5rem;
}

.navkb > ul li {
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  /* width: 0.1rem; */
  padding: 0.12rem 0;
  font-size: 0.23rem;
  background-color: #999999;
  border-radius: 0.24rem;
  color: #fff;
}
.navkb > ul .active {
  background-color: #ff9900;
}
/* 图标 */
.icons{
  position: fixed;
  top: .55rem;
  z-index: 2;
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
  margin-left:4.8rem;
}
.icons span:nth-child(3){
  margin-left:.4rem;
}
</style>