<template>
  <div class="cartGoodsItem">
    <div class="isCheckItem" @click="checkeds">
      <img :src="checkedflag" alt />
    </div>
    <div class="goodsImg">
      <img :src="items.list_pic_url" alt />
    </div>
    <div class="cartGoodsMsg" v-if="!compileflag">
      <div>{{items.goods_name}}</div>
      <div></div>
      <div style="color: red;">￥{{items.retail_price}}</div>
    </div>
    <div class="cartGoodsNum" v-if="!compileflag">X{{items.number}}</div>
    <div class="cartGoodEditWrap" v-if="compileflag">
        <div class="cartEditSizeName">已选择：</div>
        <div class="cartEditNum">
          <div style="color: red;">￥{{items.retail_price}}</div>
          <div>
              <CountOp :items="items"/>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import "./css/cartGoodsItem.css";
import CountOp from './countOp'
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: {
    Checked: {
      type: Number
    },
    compile: {
      type: Boolean
    },
    items:{
      type:Object
    }
  },
  components: {
      CountOp
  },
  data() {
    return {
      flag: true,
      checkedflag:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg",
      isChecked: 0,
      compileflag: false
    };
  },
  computed: {
    ...mapState("shopcar", {
      checked: "checked"
    })
  },
  methods: {
    ...mapActions("shopcar", ["getDelete"]),
    checkeds() {
      this.flag = !this.flag;
      this.isChecked = this.flag ? 0 : 1;
    }
  },
  created() {
    console.log(this.items)
  },
  mounted() {},
  watch: {
    isChecked() {
      this.checkedflag =
        this.isChecked == 0
          ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg"
          : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC";
    },
    checked() {
      this.isChecked = this.checked;
      this.compileflag = this.compile;
      // console.log(this.checked)
    },
    compile() {
      console.log(this.compileflag);
    }
  }
};
</script>
<style lang="scss">
</style>