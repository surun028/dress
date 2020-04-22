<template>
  <div class="mine">
    <div class="head">
      <i class="iconfont icon-fanhui2"></i>
      <h2>注册</h2>
      <span @click="fn">登录</span>
    </div>
      <!-- 注册 -->
      <div class="box">
      <div class="regbox">
          <div class="num">
          <span>手机号:</span>
          <input type="text" v-model="phone"/>
        </div>
        <div class="pass">
          <span>密 码:</span>
          <input type="text" v-model="pass"/>
        </div>
        <div class="code">
            <span>验证码:</span>
            <input type="text" v-model="yzm">
            <a href="">点击获取</a>
        </div>
        <button @click="reg">注册</button>
        <div class="check">
          <input type="checkbox">
          <p>我已阅读并同意使用<a href="">条款和隐私政策</a></p>
        </div>
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
          pass:"",
          yzm:""
        }
    },
  methods:{
      fn(){
         this.$router.push('/login')  
      },
      reg(){
        
        //    判断手机号，密码 验证码不能为空
        if(this.phone==""|| this.pass==""||this.yzm==""){
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


        //  向服务端提交数据
          this.$axios.post('/api/register',{phone:this.phone,password:this.pass})

          .then(res=>{
              console.log(res.data);
              if(res.data.status==1){
                  this.$router.push('/login')
              }
          })
        }
  }
}
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