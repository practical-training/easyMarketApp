<template>
  <div id="mine">
    <div class="tabPageContent">
      <div class="minePage">
        <div class="userMsgWrap">
          <div class="userLogo"></div>
          <div class="userMsgs">
            <div>15323807318</div>
            <div>普通用户</div>
          </div>
        </div>
        <div class="userPower">
          <div v-for="(item,ind) in data" :key={ind}>{{item}}</div>
        </div>
        <div class="loginOut">退出登录</div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer/index";
import "./index.css";
export default {
  data() {
    return {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  },
  components: {
    Footer
  }
};
</script>
<style lang='scss'>
@import url("./index.css");
</style>
