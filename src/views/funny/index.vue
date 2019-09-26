<template>
  <div class="warper1">
    <div class="header">
      <i @click="goback">&lt;</i>
      <span>奇趣分类</span>
      <i></i>
    </div>
    <div class="nav" ref="nav">
      <div class="navbox">
        <span
          v-for="(item,index) in navlist"
          :key="item.id"
          @click="tabclassify(index,item.id)"
          :class="{active:index==count}"
          :ref="index"
        >{{item.name}}</span>
      </div>
    </div>
    <div class="main">
      <div class="tit">
        <span>{{tit}}</span>
        <span>{{describe}}</span>
      </div>
      <div :class="[isdown==true?'active':'down']">{{downtit}}</div>
      <div class="content">
        <div class="contentbox">
          <div
            class="item"
            v-for="(item,index) in funnydata"
            :key="index"
            @click="jupdetail(item.id)"
          >
            <img v-lazy="item.list_pic_url" alt />
            <span>{{item.name}}</span>
            <span :style="{color:'red'}">￥{{item.retail_price}}</span>
          </div>
          <div :class="[ismore==true?'active':'more']">加载更多</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      itemClassify: [],
      tit: "",
      id: "",
      isdown: false,
      ismore: false,
      downtit: "",
      describe: "",
      categoryId: "",
      page: 1,
      size: 10
    };
  },
  computed: {
    ...mapState("classify", ["funnydata", "navlist", "count"])
  },
  methods: {
    ...mapActions("classify", ["funnyClassify", "upclassify", "getNavlist"]),
    ...mapMutations("classify", ["setcount"]),
    tabclassify(index, id) {
      this.setcount(index);
    },
    goback() {
      this.$router.go(-1);
    },
    jupdetail(id) {
      this.$router.push(`/detail/${id}`);
    },
    handle_scroll() {
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
      this.scroll.on("pullingDown", () => {
        //监听下拉刷新
        this.isdown = true;
        this.downtit = "下拉刷新";
        this.page += 1;
        this.funnyClassify({
          categoryId: this.categoryId,
          page: this.page,
          size: this.size
        });
        setTimeout(() => {
          this.isdown = false;
          this.scroll.finishPullDown();
        }, 1000);
      });
      this.scroll.on("pullingUp", () => {
        this.page += 1;
        this.upclassify({
          categoryId: this.categoryId,
          page: this.page,
          size: this.size
        });
        setTimeout(() => {
          this.isdown = false;
          this.scroll.refresh();
          this.scroll.finishPullUp();
        }, 1000);
      });
    },
    updata() {
      this.tit = this.navlist[this.count].name;
      this.describe = this.navlist[this.count].front_name;
      this.categoryId = this.navlist[this.count].id;
      this.funnyClassify({
        categoryId: this.categoryId,
        page: this.page,
        size: this.size
      });
    }
  },
  updated() {
    this.downtit = "刷新成功";
  },
  mounted() {
    this.oscroll = new BScroll(this.$refs.nav, {
      scrollX: true,
      click: true
    });
    this.handle_scroll();
    this.id = this.$route.params.id;
    this.getNavlist({ id: this.id });
  },
  watch: {
    count: function(params) {
      this.updata();
    },
    navlist: function() {
      this.updata();
    }
  }
};
</script>
<style>
@import url("css/index.css");
</style>>
