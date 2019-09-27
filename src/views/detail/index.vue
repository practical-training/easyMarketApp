<template>
  <div class="warper2">
    <div class="header">
      <i @click="goback">&lt;</i>
      <span>{{info.name}}</span>
      <i></i>
    </div>
    <div class="main">
      <div class="content">
        <div class="show"></div>
        <div class="serveList">
          <span>
            <b style="color:red">★</b> 30天无忧退货
          </span>
          <span>
            <b style="color:red">★</b> 48小时快速退款
          </span>
          <span>
            <b style="color:red">★</b> 满88元免邮费
          </span>
        </div>
        <div class="describe">
          <span>{{info.name}}</span>
          <span>{{info.goods_brief}}</span>
          <span>￥{{info.retail_price}}</span>
        </div>
        <div class="specification">
          <span>X0</span>
          <span>选择规格></span>
        </div>
        <div class="canshu">—— 商品详情 ——</div>
        <div class="issue">
          <span class="issue_tit">—— 常见问题 ——</span>
          <div class="issue_item" v-for="(item,index) in data.issue" :key="index">
            <span>{{item.question}}</span>
            <span>{{item.answer}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="carfooter"></div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      id: "",
      info: "",
      issue: "",
      productList: ""
    };
  },
  computed: {
    ...mapState("product", ["data"])
  },
  methods: {
    ...mapActions("product", ["productDetil"]),
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.productDetil({ id: this.id });
  },
  watch: {
    data: function() {
      this.info = this.data.info;
      this.issue = this.data.issue;
      this.productList = this.data.productList;
    }
  }
};
</script>
<style>
@import url("css/index.css");
</style>