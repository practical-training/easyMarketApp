<template>
  <div class="tabPageContent">
    <div class="minePage">
      <div class="userMsgWrap">
        <div class="userLogo">
          <el-col :span="20">
            <div class="demo-basic--circle">
              <div class="block">
                <el-avatar :size="80" :src="circleUrl"></el-avatar>
              </div>
            </div>
          </el-col>
        </div>
        <div class="userMsgs">
            <div v-text="auth"></div>
            <div>普通用户</div>
        </div>
      </div>
      <div class="userPower">
        <div class="itemIcon">
            <i class="iconfont icon-clone"></i>
            <span>我的收藏</span>
        </div>
        <div class="itemIcon">
            <i class="iconfont icon-clone"></i>
            <span>地址管理</span>
        </div>
        <div class="itemIcon">
            <i class="iconfont icon-clone"></i>
            <span>我的订单</span>
        </div>
        <div class="itemIcon">
            <i class="iconfont icon-clone"></i>
            <span>周末拼单</span>
        </div>
        <div class="itemIcon">
            <i class="iconfont icon-clone"></i>
            <span>优惠卷</span>
        </div>
        <div class="itemIcon">
            <i class="iconfont icon-clone"></i>
            <span>优先购</span>
        </div>
        <div class="itemIcon">
            <i class="iconfont icon-clone"></i>
            <span>我的红包</span>
        </div>
        <div class="itemIcon">
            <i class="iconfont icon-clone"></i>
            <span>会员plus</span>
        </div>
        <div class="itemIcon">
            <i class="iconfont icon-clone"></i>
            <span>邀请返利</span>
        </div>
        <div class="itemIcon">
            <i class="iconfont icon-clone"></i>
            <span>意见反馈</span>
        </div>
        <div class="itemIcon">
            <i class="iconfont icon-clone"></i>
            <span>客服咨询</span>
        </div>
        <div class="itemIcon">
            <i class="iconfont icon-clone"></i>
            <span>账户安全</span>
        </div>
      </div>
      <div class="loginOut">退出登录</div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/footer/index.vue";
import "./css/auth.css"
export default {
  data() {
    return {
      auth: "",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"]
    };
  },
  components: {
    Footer
  },
  mounted() {
    this.auth = this.$route.params.id;
  }
};
</script>>
<style >
</style>