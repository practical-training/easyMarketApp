<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import {mapState} from "vuex"
export default {
  data() {
    return {};
  },
  props: {
    list: {
      type: Object
    }
  },
  mounted() {
    this.scroll = new BScroll(".content", {
      pullDownRefresh: {
        threshold: 50, //阈值
        stop: 50
      },
      pullUpLoad: {
        threshold: 50
      },
      click: true
    });
    this.scroll.on("pullingDown", async () => {
      console.log("下拉刷新");
      this.list.query.page += 1;
      await this.list.funnyClassify({...this.list.query,categoryId:this.categoryId});
      //下拉刷新
      this.scroll.finishPullDown();
    });
    this.scroll.on("pullingUp", async () => {
      console.log("上拉加载");
      this.list.query.page += 1;
      await this.list.upclassify({...this.list.query,categoryId:this.categoryId});
      this.scroll.refresh();
      this.scroll.finishPullUp();
    });
  },
  computed:{
    ...mapState("classify",['categoryId'])
  },

};
</script>
<style>
</style>