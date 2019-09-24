<template>
   <div id="home">
      <div class="special" ref="itemScroll">
        <div class="special-item" >
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
import './css/index.css'
export default {
  props:{

  },
  components:{
    Footer,
    Special
  },
  data(){
    return {
      size: 5,
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
  
  this.getSpecial({page:this.page,size:this.size})
  },
  mounted(){
    this.$nextTick(() => {


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
      })
      this.scroll.on('pullingUp', () => {
      console.log('处理上拉加载操作')
      setTimeout(() => {
        // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
        this.page++;
        this.getSpecial({page:this.page,size:this.size})
        this.scroll.finishPullUp()
        }, 2000)
      })


      // this.getSpecial()
      // this.scroll.on('pullingDown', () => {
      // console.log('处理下拉刷新操作')
      // setTimeout(() => {
      // console.log('asfsaf')
      // // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
      // this.scroll.finishPullDown()
      // }, 2000)
      // })
    })
  }
}
</script>
<style lang="scss">


</style>
