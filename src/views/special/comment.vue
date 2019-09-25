<template>
    <div class="home" >
    <div class="header">
      <span @click="goto">&lt;</span>
      <h4>填写留名</h4>
    </div>
    <div class="textAreaContent">
        <textarea  v-model="content" width="100%" ></textarea><span>{{this.contentMaxLength - this.content.length}}/80</span>
       
    </div>
    <div class="buttons">
        <div @click="remove">{{qingkong}}</div>
        <div class="btn" @click="btn">留 言</div>
    </div>
  </div>
</template>
<script>
import './css/comment.css'
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            content: '',
            contentMaxLength: 80,
            qingkong:'',
            topicxq:{}
        }
    },
    computed:{
        
    },
    methods:{
        ...mapActions("special",['getCommentpost']),
        goto() {
            this.$router.go(-1);
        },
        remove(){
            this.content ='';
        },
        btn(){
        this.getCommentpost({content:this.content,valueId:this.topicxq.id,typeId:1})
        this.content ='';
        this.$router.go(-1);
        }
    },
    created(){
        this.topicxq = this.$route.params.topicxq;
    },
    mounted(){

    },
     watch: {
        content() {
            if (this.content.length > this.contentMaxLength) {
                this.content = String(this.content).slice(0, this.contentMaxLength);
            }
          this.qingkong =this.content.length>0?'清空':'';
        }
    }
}
</script>
<style lang="scss">

</style>