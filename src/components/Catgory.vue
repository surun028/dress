<template>
  <div class="catgory">
    <!-- 顶部 -->
    <div class="header">
      <input type="text" class="search" placeholder="Montagne jeunesse" />
      <i class="iconfont icon-11"></i>
    </div>

    <div class="left">
      <ul>
        <li v-for="(item,ind) in arr" :key="ind" @click="fn(ind)">{{item.name}}</li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li v-for="item in list" :key="item.id">
          <img :src="item.thumbnail" />
          <div class="title">{{item.name}}</div>
        </li>
      </ul>
    </div>
    <div style="clear:both"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [],
      list: []
    };
  },
  created() {
    this.$axios.get("/api/getClassify").then(res => {
      this.arr = res.data.data;
      this.list = res.data.data[0].list;
    });
  },
  methods: {
    fn(index) {
      this.list = this.arr[index].list;
    }
  }
};
</script>
<style  scoped>
.catgory {
  background: #fff;
}
.catgory .left {
  float: left;
  width: 2.35rem;
  height: 16.2rem;
  background-color: #fafafa;
}
.catgory .left li {
  height: 0.94rem;
  line-height: 0.94rem;
  text-align: center;
  font-size: 0.28rem;
  color: #333333;
  font-family: "宋体";
  border-left: 0.1rem solid #fafafa;
  background-color: #fafafa;
}
.catgory .left li:hover {
  color: orange;
  border-left: 0.1rem solid #1d84a7;
  background-color: #ffffff;
}

.catgory .right {
  overflow: hidden;
}
.catgory .right ul {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.catgory .right li {
  width: 46%;
  border: 2px solid #1d84a7;
  display: flex;
  flex-direction: column;
  margin-top: 0.1rem;
  border-radius: 0 0 0.1rem 0.1rem;
  overflow: hidden;
}
.catgory .right li img {
  width: 95%;
  margin: 0.1rem auto;
}
.catgory .right li .title {
  height: 0.35rem;
  background: #1d84a7;
  color: #fff;
  text-align: center;
  line-height: 0.35rem;
}
/* 顶部 */
.header {
    position: relative;
  height: 1rem;
  background-color: #ff9900;
}
.header .search {
  position: absolute;
  top: 0.2rem;
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
.header .icon-11{
  position: absolute;
  top: .32rem;
  left: 5.75rem;
  color: #000 !important;
  font-size: .35rem;
  z-index: 9;

}
</style>