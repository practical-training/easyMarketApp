<template>
  <div class="noTabPageContent">
    <div class="header">
      <div @click="goback" class="left">&lt;</div>
      <div class="title" v-text="brandDetailData.brand.name"></div>
      <div class="right"></div>
    </div>
    <div class="brandDetail">
      <img v-lazy="brandDetailData.brand.list_pic_url" alt />
      <div class="breadDesc" v-text="brandDetailData.brand.simple_desc"></div>
    </div>
    <div class="brandGoodsList">
      <div class="goodsListWrap">
        <div class="goodsList">
          <div class="goodsItem" v-for="item in goodList.data" :key="item.id">
            <div class="goodsItemImg">
              <img v-lazy="item.list_pic_url" alt />
            </div>
            <div class="goodsItemName" v-text="item.name"></div>
            <div class="goodsItemPrice">￥{{item.retail_price}}元</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import "./index.css";
export default {
  computed: {
    ...mapState("home", ["brandDetailData", "goodList"])
  },
  methods: {
    ...mapActions("home", ["getDetailData", "getGoodList"]),
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.getDetailData({ id: this.$route.params.id });
    this.getGoodList({ brandId: this.$route.params.id, page: 1, size: 100 });
  }
};
</script>>
<style >
</style>