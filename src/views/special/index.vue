<template>
   <div id="home">
      <div class="special" >
        <div class="special-item" ref="itemScroll">
          <Special v-for="(item) in list" :key="item.id" :items="item"/>
        </div> 
      </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/footer/index";
import Special from './components/special';
import BScroll from 'better-scroll';
import {mapState, mapActions} from 'vuex'
export default {
  props:{

  },
  components:{
    Footer,
    Special
  },
  data(){
    return {
      pageSize: 5,
      page: 1,
      isMorePage: false,
      dropDown: false,
      isLoading: false
    }
  },
  computed:{
    ...mapState(['list'])
  },
  methods:{
    ...mapActions(['getSpecial']),
    
    
  },
  created(){
  
  this.getSpecial()
  },
  mounted(){
    this.$nextTick(() => {
      
        this.scroll = new BScroll(this.$refs.itemScroll, {
            click: true,
            probeType: 3
            })
            // console.log(this.scroll)
            // this.scroll.on('scroll', (pos) => {
            //   console.log(pos)
            //   if (pos.y > 50) {  //下拉高度大于50 (看自己需要)
            //     this.dropDown = true  //逻辑操作，我这是显示下拉提示组件
            //      console.log(pos)
            //   } else {
            //     this.dropDown = this.isLoading ? true : false  //isloading 表示正在加载数据(加载中也显示下拉提示组件)
            //      console.log(pos)
            //   }
            // })
              //touchEnd（手指离开以后触发） 通过这个方法来监听下拉刷新
        //       this.scroll.on('touchEnd', (pos) => {
        //       //上拉加载 总高度>下拉的高度+数值(20仅供参考) 触发加载更多
        //       if (this.scroll.maxScrollY > pos.y + 20) {
        //       //使用refresh 方法 来更新scroll 解决无法滚动的问题
        //       if (this.isMorePage) {  //判断是否有下一页
        //           this.pullUp = true  //显示上拉提示组件
        //           this.page++
        //           this.getPostList().then(res => { //调用接口，处理数据
        //           this.pullUp = false
        //           this.list = this.list.concat(res.list)
        //           this.scroll.refresh()  //刷新插件!!!!!这个挺重要的！别忘了。不然会一卡一卡
        //         })
        //       }
        //   }
        // })
      })
  }
}
</script>
<style lang="scss">
#home{
   position: relative;
}
.special{
  width: 100%;
  flex: 1;
  background: #F5F5F9;
  overflow: hidden;
 margin-bottom: 50px;
}  
.special-item{
  width: 100%;
  overflow: hidden;
  z-index: 1;
 position: absolute;
}

</style>