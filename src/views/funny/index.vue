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
      <MybetterScroll :list="list">
        <div class="content">
          <div class="contentbox">
            <div
              class="item"
              v-for="(item,index) in list.funnydata"
              :key="index"
              @click="jupdetail(item.id)"
            >
              <img v-lazy="item.list_pic_url" alt />
              <span>{{item.name}}</span>
              <span :style="{color:'red'}">￥{{item.retail_price}}</span>
            </div>
          </div>
        </div>
      </MybetterScroll>
    </div>
  </div>
</template>
<script>
import MybetterScroll from "../../components/mybetterScroll";
import { mapActions, mapState, mapMutations, mapGetters } from "vuex";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      itemClassify: [],
      tit: "",
      isdown: false,
      ismore: false,
      downtit: "",
      describe: "",
      list: {
        funnydata: [],
        query: {
          size: 10,
          page:""
        },
        funnyClassify: this.funnyClassify,
        upclassify: this.upclassify
      }
    };
  },
  components: {
    MybetterScroll
  },
  computed: {
    ...mapState("classify", ["navlist", "funnydata", "categoryId","count"])
  },
  methods: {
    ...mapActions("classify", ["funnyClassify", "upclassify", "getNavlist"]),
    ...mapMutations("classify", ["setcount"]),
    tabclassify(index, id) {
      this.setcount(index);
      this.list.query.page=1
      this.updata()
    },
    jupdetail(id) {
      this.$router.push(`/detail/${id}`);
    },
    goback() {
      this.$router.go(-1);
    },
    updata() {
      this.tit = this.navlist[this.count].name;
      this.describe = this.navlist[this.count].front_name;
      this.list.funnydata = this.funnydata;
      this.funnyClassify({
        categoryId:this.categoryId,
        page: this.list.query.page,
        size: this.list.query.size
      });
    }
  },
  mounted() {
    this.list.query.page=1
    this.oscroll = new BScroll(this.$refs.nav, {
      scrollX: true,
      click: true
    });
    this.getNavlist({ id: this.$route.params.id });
  },
  watch: {
    navlist:function (params) {
       this.updata()
    },
    funnydata:function (params) {
      this.list.funnydata=this.funnydata
    }
  }
};
</script>
<style>
@import url("css/index.css");
</style>>
