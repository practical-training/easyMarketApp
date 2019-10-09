<template>
    <div id="home" >
        <div class="header">
            <span @click="goto">&lt;</span>
            <h4>easyLikeGoods</h4>
        </div>
        <div class="collectList" ref="itemScroll">
            <!-- <div class="collectscroll"></div> -->
                <CollectList v-for="item in collectlist" :key="item.id" :items="item"/> 
        </div>
    </div>
</template>
<script>
import CollectList from './components/collectList'
import {mapState,mapActions} from 'vuex'
import './css/collectlist.css'
import BScroll from 'better-scroll';
export default {
    props:{

    },
    components:{
        CollectList
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState('mine',{
            collectlist:"collectlist"
        })
    },
    methods:{
        ...mapActions('mine',['getCollect','getGoodscount']),
        goto() {
      this.$router.go(-1);
    },
    },
    created(){
        this.getCollect({typeId	:0,size:1000})
    },
    mounted(){
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
        collectlist(){
            this.getCollect({typeId	:0,size:1000})
        }
    }
}
</script>
<style lang="scss">

</style>