<template>
  <div class="home" >
    <div class="header">
      <span @click="goto">&lt;</span>
      <h4>{{topicxq.title}}</h4>
    </div>
    <div class="common" ref="itemScroll">
        <div class="topicDetail">
            <div class="topicDetailImg" v-html="topicxq.content">
            </div>
            <div class="commentWrap">
                <div class="titleName">
                    <h4>精选留言</h4>
                    <span @click="comment">评论</span>
                </div>
                <div class="commentList" >
                    <Topiclist v-for="(item) in commentlist" :key="item.id" :items="item" />
                    <div class="moreComment" @click="listComment">查看跟多评论</div>
                </div>
                <div class="relateTopic">
                    <div class="relateTopicTitle">推荐专题</div>
                    <RelateTopicItem v-for="(item) in relatedlist " :key="item.id" :items="item" @func="idChange"/>
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
import RelateTopicItem from './components/relateTopicItem'
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {

  },
  components: {
      Topiclist,
      RelateTopicItem
  },
  data() {
    return {
        id:''
    };
  },
  computed: {
    ...mapState("special", {
      topicxq: "topicxq",
      commentlist:"commentlist",
      relatedlist:"relatedlist"
    })
  },
  methods: {
    ...mapActions("special", ["getTopic","getComment","gGetRelated"]),
    goto() {
      this.$router.go(-1);
    },
    listComment(){
        let id = this.id;
        this.$router.push({
        path: "/noTabPage",
        name: "noTabPage",
        params: {
          id: id
        }
      });  
    },
    idChange(id){
      // console.log(id)
      this.getTopic({ id });
      this.getComment({valueId:id,typeId:1,page:1,size:5})
      this.gGetRelated({id})
    },
    comment(){
          let id = this.id;
          let topicxq = this.topicxq ;
        console.log(topicxq)
        this.$router.push({
        path: "/comment",
        name: "comment",
        params: {
          topicxq: topicxq
        }
      });
    }
  },
  created() {
    this.id = this.$route.params.id;
    let id = this.id;
    this.getTopic({ id });
    this.getComment({valueId:id,typeId:1,page:1,size:5})
    this.gGetRelated({id})
    // console.log(this.topicxq);
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