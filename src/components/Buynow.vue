<template>
  <div class="buynow">
    <transition
      enter-class
      enter-active-class="animated fadeInUp"
      enter-to-class
      leave-class
      leave-active-class="animated fadeOutDown"
      leave-to-class
    >
      <div class="bg" v-show="isshow">
        <div class="attribute">
          <div class="describe">
            <h5>&yen;{{prolist.reduct_price}}</h5>
            <p>库存{{prolist.total}}件</p>
            <p>请选择商品属性</p>
          </div>
          <div class="img" v-for="(ite,i) in prolist.swiperImgArr" :key="i">
            <img :src="ite" alt />
          </div>
          <i @click="fn" class="iconfont icon-guanbi"></i>
        </div>
        <div class="amount">
          <h3>购买数量</h3>
          <div>
            <i class="redu" @click="redu">-</i>
            <i class="num">{{number}}</i>
            <i class="add" @click="add">+</i>
          </div>
        </div>
        <div class="size" v-for="(item,index) in prolist.buySelect" :key="index">
          <h3>{{item.name}}</h3>
          <ul>
            <li
              v-for="(itemr,ind) in item.list"
              :key="ind"
              :class="{'active':buyselect['tab'+index]==itemr}"
              @click="changebs(index,itemr)"
            >{{itemr}}</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 1,
      buyselect: {
        tab0: "1L",
        tab1: "5岁以下"
      },
      seletbuy: {
        大小: "1L",
        年龄: "5岁以下"
      }
    };
  },
  props: ["prolist", "isshow"],
  methods: {
    redu() {
      this.number--;
      if (this.number <= 1) {
        this.number = 1;
      }
      this.$emit('xyz',this.number)

    },
    add() {
      this.number++;
      this.$emit('xyz',this.number)

    },
    fn() {
      this.$emit("abc");
    },
    changebs(index, itemr) {
      // console.log(this.buyselect['tab'+index]);
      this.buyselect["tab" + index] = itemr;
      // console.log(this.prolist);
      this.seletbuy[this.prolist.buySelect[index].name] = itemr;
      this.$emit("getselect", this.seletbuy);
    }
  },
  
};
</script>
<style scoped>
.buynow {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0.4rem;
  bottom: 1.92rem;
  left: 0;
  right: 0;
  z-index: 4;
}
.buynow > .bg {
  position: fixed;
  bottom: 1.92rem;
  left: 0;
  right: 0;
  height: 5.75rem;
  background-color: #fff;
  border-bottom: 1px solid #dddddd;
}
.attribute {
  position: relative;
  height: 1.88rem;
}
.attribute .describe {
  margin-left: 2.8rem;
  padding-top: 0.6rem;
  color: #000;
  font-size: 0.25rem;
}
.attribute .img {
  position: absolute;
  top: -0.37rem;
  left: 0.42rem;
  width: 2.1rem;
  height: 2.1rem;
  border: 0.07rem solid #dddddd;
  border-radius: 0.03rem;
}
.attribute .img > img {
  width: 100%;
}
.attribute .describe > h5 {
  font-size: 0.3rem;
  color: #eb2222;
  font-weight: normal;
}
.attribute > i {
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  font-size: 0.4rem;
  color: #999999;
}
.amount {
  display: flex;
  justify-content: space-between;
  padding: 0 0.42rem;
  font-size: 0.3rem;
  height: 0.93rem;
  line-height: 0.93rem;
}
.amount > h3 {
  font-weight: normal;
}
.amount i {
  font-style: normal;
  display: inline-block;
}
.amount .redu,
.amount .add {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #999999;
  line-height: 0.5rem;
  text-align: center;
  color: #fff;
}

.amount .num {
  width: 1rem;
  height: 0.5rem;
  line-height: 0.5rem;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  text-align: center;
}
.size,
.age {
  height: 1.3rem;
  padding: 0 0.42rem;
}
.size > h3,
.age > h3 {
  font-size: 0.3rem;
  font-weight: normal;
  height: 0.65rem;
  line-height: 0.65rem;
}
.size ul,
.age ul {
  display: flex;
}
.size ul li,
.age ul li {
  font-size: 0.2rem;
  padding: 0 0.4rem;
  height: 0.45rem;
  line-height: 0.45rem;
  background-color: #dddddd;
  color: #999999;
  margin-right: 0.2rem;
  border-radius: 0.18rem;
}
.size ul .active,
.age ul .active {
  background-color: #ff9900;
  color: #fff;
}
</style>