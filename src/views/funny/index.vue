<template>
  <div class="warper1">
    <div class="header">
      <i @click="goback">&lt;</i>
      <span>奇趣分类</span>
      <i></i>
    </div>
    <div class="nav">
      <div class="navbox">
        <span
          v-for="(item,index) in itemClassify"
          :key="item.id"
          @click="tabclassify(index,item.id)"
          :class="{active:index==count}"
        >{{item.name}}</span>
      </div>
    </div>
    <div class="main">
      <div class="tit">
        <span>{{tit}}</span>
        <span>{{describe}}</span>
      </div>
      <div class="content">
        <div class="contentbox">
          <div class="item" v-for="item in funnydata" :key="item.id" @click="jupdetail(item.id)">
            <img v-lazy="item.list_pic_url" alt="">
            <span>{{item.name}}</span>
            <span :style="{color:'red'}">￥{{item.retail_price}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      itemClassify: [],
      tit: "",
      count: 0,
      describe: "",
      categoryId:""
    };
  },
  computed: {
    ...mapState("classify", ["itemClassify", "funnydata"])
  },
  methods: {
    ...mapActions("classify", ["funnyClassify"]),
    tabclassify(index,id) {
      this.count=index
      this.funnyClassify({ categoryId: id });
    },
    goback(){
      this.$router.go(-1)
    },
    jupdetail(id){
      this.$router.push(`/detail/${id}`)
    }
  },
  mounted(){
    this.itemClassify = JSON.parse(this.$route.params.list);
    this.tit = this.itemClassify[this.count].name;
    this.describe = this.itemClassify[this.count].front_name;
    this.categoryId = this.itemClassify[this.count].id;
    this.funnyClassify({categoryId:this.categoryId});
    // console.log(this.tit, '22222')
    console.log('tag', '')
  }
};
</script>
<style>
@import url("css/index.css");
</style>