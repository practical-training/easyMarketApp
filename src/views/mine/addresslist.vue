<template>
    <div id="home" >
        <div class="header">
            <span @click="goto">&lt;</span>
            <h4>地址管理</h4>
        </div>
        <div class="addressPage" ref="itemScroll">
            <div class="addressList">
                <Addressitem />
                <Addressitem />
                <Addressitem />
            </div>
        </div>
        <div class="addAddress">
            <div class="am-button" v-if="!flag">
                <span>新增地址</span>
            </div>
            <div v-if="flag" class="am-button-inline"><span>取消</span></div>
            <div v-if="flag" class="am-button-primary"><span>保存</span></div>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import './css/addresslist.css'
import BScroll from 'better-scroll';
import Addressitem from './components/addressitem'
export default {
    props:{

    },
    components:{
        Addressitem
    },
    data(){
        return {
            flag:false
            
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
    }
}
</script>
<style lang="scss">

</style>