<template>
  <div id="home">
    <div class="shopcar">
      <div class="car" ref="itemScroll">
        <ul class="nav">
          <li>
            <span>★</span>30天无忧退货
          </li>
          <li>
            <span>★</span>48小时快速退款
          </li>
          <li>
            <span>★</span>满88元免邮费
          </li>
        </ul>
        <div class="cartGoodsListWrap">
          <CartGoodsItem :Checked="isChecked" :compile="compileflag"/>
          <CartGoodsItem :Checked="isChecked" :compile="compileflag"/>
          <CartGoodsItem :Checked="isChecked" :compile="compileflag"/>
        </div>
      </div>
      <div class="cartGoodsDo">
        <div class="isCheckItem" @click="checkeds">
          <img :src="checkedflag" alt />
        </div>
        <div class="cartMsgAll">已选(8)￥ 972</div>
        <div class="cartAllDoButton" @click="compile">{{compiles}}</div>
        <div class="cartAllDoButton pay" @click="remove">{{DeleteOrder}}</div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import "./css/index.css";
import Footer from "@/components/footer/index";
import BScroll from "better-scroll";
import CartGoodsItem from "./components/cartGoodsItem";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {},
  components: {
    Footer,
    CartGoodsItem
  },
  data() {
    return {
      flag: true,
      checkedflag:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg',
      isChecked:0,
      compiles:'编辑',
      DeleteOrder:'下单',
      compileflag:false
    };
  },
  computed: {
    ...mapState("shopcar", {
      cartlist: "cartlist"
    })
  },
  methods: {
    ...mapActions("shopcar", ["getCart", "getChecked",'getDelete']),
    ...mapMutations('shopcar',['setischecked']),
    checkeds() {
      this.flag = !this.flag;
      
        //是否登陆
        // this.getChecked({isChecked:1,productId:111})
    },
    compile(){
      this.flag = !this.flag;
      this.compileflag = !this.compileflag;
       console.log(this.compileflag)
    },
    remove(){
      if(this.DeleteOrder=='删除所选'){
        console.log('删除所选...')
        this.getDelete({valueId:1,typeId:1})
      }else{
        console.log("还没有此功能")
      }
    }
  },
  created() {
     
      this.getCart({ typeId: 1 });
     },
  mounted() {
    this.$nextTick(() => {
      // console.log(this.$refs.itemScroll)
      this.scroll = new BScroll(this.$refs.itemScroll, {
        click: true,
        // 上拉加载
        pullUpLoad: {
          // 当上拉距离超过30px时触发 pullingUp 事件
          threshold: -30
        },
        // 下拉刷新
        pullDownRefresh: {
          // 下拉距离超过30px触发pullingDown事件
          threshold: 30,
          // 回弹停留在距离顶部20px的位置
          stop: 20
        }
      });
    });
  },
  watch: {
        flag() {
           this.checkedflag = this.flag
        ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg"
        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC";
        this.isChecked = this.flag?0:1;
        // this.setischecked(this.isChecked)
        },
        compileflag(){
          this.compiles = this.compileflag?'完成':'编辑';
          this.DeleteOrder = this.compileflag?'删除所选':'下单';
        }
    }
};
</script>
<style lang="scss">
</style>
