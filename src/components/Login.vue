<template>
  <div class="mine">
    <div class="head">
      <i class="iconfont icon-fanhui2"></i>
      <h2>登录</h2>
      <span @click="fn">注册</span>
    </div>
    <!-- 登录 -->
    <div class="box">
      <div class="loginbox">
        <div class="num">
          <span>手机号:</span>
          <input type="text" v-model="phone"/>
        </div>
        <div class="pass">
          <span>密 码:</span>
          <input type="text" v-model="pass"/>
        </div>
        <p>
          <a href="#">忘记密码</a>
        </p>
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
          phone:"",
          pass:""
        }
    },
  methods:{
      fn(){
         this.$router.push('/register')  
      },
      login(){
        if(this.phone==""|| this.pass==""){
            Toast({
                 message: '信息不能为空',
                 position: 'middle'
            })
           return ;
        }
           var preg=/^1(3|4|5|7|8|9)\d{9}/;
           if(!preg.test(this.phone)){
             Toast({
                 message: '手机号格式不正确',
                 position: 'middle'
             })
             return ;  
           }


     this.$axios.get('/api/login?phone='+this.phone+'&password='+this.pass)
      .then(res=>{
          if(res.data.status==1){
              localStorage.setItem('user',this.phone)
              this.$router.push('/');
          }
      })
       


      
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