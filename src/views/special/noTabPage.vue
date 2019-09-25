<template>
  <div class="home" >
    <div class="header">
      <span @click="goto">&lt;</span>
      <h4>关爱每一个成长的痕迹</h4>
    </div>
    <div class="common" ref="itemScroll">
        <div class="topicDetail">
            <div class="commentWrap">
                <div class="titleName">
                    <h4>精选留言</h4>
                    <span>1</span>
                </div>
                <div class="commentList">
                    <Topiclist v-for="(item) in commentlist" :key="item.id" :items="item" />
                </div>
                <div>
                    
                </div>
            </div>
        </div>  
    </div>
  </div>
</template>
<script>
import "./css/topic.css";
import BScroll from "better-scroll";
import Topiclist from './components/topiclist'
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {

  },
  components: {
      Topiclist
  },
  data() {
    return {
        id:''
    };
  },
  computed: {
    ...mapState("special", {
      topicxq: "topicxq",
      commentlist:"commentlist"
    })
  },
  methods: {
    ...mapActions("special", ["getTopic","getComment"]),
    goto() {
      this.$router.go(-1);
    }
  },
  created() {
    this.id = this.$route.params.id;
    let id = this.id;
    console.log(id)
      this.getComment({valueId:id,typeId:1,page:1,size:100})
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
  }
};
</script>
<style lang="">
</style>