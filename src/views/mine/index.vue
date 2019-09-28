<template>
  <div class="loginBox">
    <div class="logo">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
    </div>
    <div class="loginMain">
      <div class="inputWrap onePx_bottom">
        <input type="text" placeholder="请输入手机号码"  v-model="mobile"/>
      </div>
      <div class="inputWrap onePx_bottom">
        <input type="password" placeholder="请输入登录密码" v-model="password"/>
      </div>
      <div class="loginBtn" @click="login">登 录</div>
    </div>
  </div>
</template>
<script>
import "./css/index.css";
import {loginByMobile} from "@/service/index"
export default {
  data(){
    return{
      mobile:"15323807318",
      password:"123456"
    }
  },
  methods:{
    login () {
       loginByMobile({mobile:this.mobile,password:this.password}).then(res=>{
          console.log(res.data.sessionKey)
            window.localStorage.setItem('sessionKey',res.data.sessionKey)
         if(res.errno==0){

            this.$router.history.push(`/mine/auth/${res.data.mobile}`)
         }
       })   
    }
  },
  mounted(){

  }
};
</script>>
<style >
</style>