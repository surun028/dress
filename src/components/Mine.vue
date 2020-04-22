<template>
  <div class="mine">
    111
    <!-- <div class="head">
      <i class="iconfont icon-fanhui2"></i>
      <h2>{{title}}</h2>
      <span @click="fn">{{change}}</span>
    </div> -->
    <!-- 登录 -->
    <!-- <div class="box">
      <div class="loginbox" v-if="this.isShow">
        <div class="num">
          <span>手机号:</span>
          <input type="text" />
        </div>
        <div class="pass">
          <span>密 码:</span>
          <input type="text" />
        </div>
        <p>
          <a href="#">忘记密码</a>
        </p>
        <button>登录</button>
      </div>
      <!-- 注册 -->
      <div class="regbox" v-if="!this.isShow">
          <div class="num">
          <span>手机号:</span>
          <input type="text" />
        </div>
        <div class="pass">
          <span>密 码:</span>
          <input type="text" />
        </div>
        <div class="code">
            <span>验证码:</span>
            <input type="text">
            <a href="">点击获取</a>
        </div>
        <button>注册</button>
        <div class="check">
          <input type="checkbox">
          <p>我已阅读并同意使用<a href="">条款和隐私政策</a></p>
        </div>
      </div>
    <!-- </div> --> 
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "登录",
      change: "注册",
      isShow: true
    };
  },
  methods: {
    fn() {
      if (this.title == "登录") {
        this.title = "注册";
        this.change = "登录";
      } else if (this.title == "注册") {
        this.title = "登录";
        this.change = "注册";
      }
      this.isShow = !this.isShow;
    }
  }
};
</script>
<style scoped>
.mine {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.1rem;
  background-color: #ff9900;
  color: #fff;
  text-align: center;
  font-size: 0.34rem;
  padding-left: 0.24rem;
  padding-right: 0.28rem;
}
.head i {
  font-size: 0.35rem;
  color: #fff;
}
.head h2,.head span{
    font-weight: normal;
    color: #fff;
    font-size: .35rem;
}
/* 登录 注册 */
.box {
  flex: 1px;
  background-color: #fff;
}
.loginbox{
  padding: 1.93rem 0.75rem 0;
}
.regbox{
    padding: 1.2rem 0.75rem 0;
}
.box .num,
.box .pass,
.box .code {
  border-bottom: 1px solid #adadad;
}
.box input {
  width: 60%;
  height: 1.32rem;
  border: none;
  outline: none;
  margin-left: 0.2rem;
}
.loginbox p {
  text-align: right;
  margin-top: .55rem;
  padding-right: 0.19rem;
}
.loginbox p a {
  color: #666;
}
.regbox .code a{
    color: #ff0042;
}
.box button {
  width: 100%;
  height: 1rem;
  border: none;
  outline: none;
  background-color: #ff9900;
  color: #fff;
  font-size: 0.34rem;
  border-radius: 0.09rem;
  margin-top: .48rem;
}
.check{
  line-height: 1.28rem;
  display: flex;
}
.check>input{
  width: .3rem;
  margin-right: .2rem;
}
.check p{
  color: #666;
}
.check a{
  color: #000;
}
</style>