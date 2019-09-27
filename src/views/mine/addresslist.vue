<template>
    <div id="home" >
        <div class="header">
            <span @click="goto">&lt;</span>
            <h4>地址管理</h4>
        </div>
        <div class="addressPage" ref="itemScroll">
            <div class="addressList" v-if="!flag">
                <Addressitem />
                <Addressitem />
                <Addressitem />
            </div>
            <div class="addressSetPage" v-if="flag">
                <div class="onePx_bottom"><input class="addressInput" placeholder="姓名"></div>
                <div class="onePx_bottom"><input class="addressInput" placeholder="电话号码"></div>
                <div class="onePx_bottom"><div class="chooseAddress">北京/北京市/东城区</div></div>
                <div class="onePx_bottom"><input class="addressInput" placeholder="详细地址"></div>
                <div class="onePx_bottom"><div class="isDefaultAddress">设置默认地址<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" alt="check"></div></div>
            </div>
        </div>
        <div class="addAddress">
            <div class="am-button" v-if="!flag" @click="addlist">
                <span>新增地址</span>
            </div>
            <div v-if="flag" class="am-button-inline" @click="dellist"><span>取消</span></div>
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
            flag:false,
            flagimg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg',
            
            
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
    addlist(){
        this.flag=true;
    },
    dellist(){
        this.flag=false;
    }
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
    },
    watch(){
        
    }
}
</script>
<style lang="scss">

</style>