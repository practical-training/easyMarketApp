<template>
  <div class="tabPageContent" ref='tabPageContent'>
    <div class="tabContent">
      <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
          <swiper-slide class="swiper-slide" v-for="item in data.banner" :key="item.id">
            <img v-lazy="item.image_url" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="nav">
        <div
          v-for="item in data.channel"
          :key="item.id"
          class="nav_item"
          @click="handleFunny(item.id)"
        >
          <img v-lazy="item.icon_url" alt />
          <div>{{item.name}}</div>
        </div>
      </div>
      <div class="brandBox">
        <div class="brandTitle">品牌制造商直供</div>
        <div class="brandWrap">
          <router-link
            class="brandItem"
            v-for="item in data.brandList"
            :key="item.id"
            :to="{name:'brandDetail', params: {id:item.id}}"
            @click="handleBrandItem(item.id)"
          >
            <div class="brandItemName">{{item.name}}</div>
            <div class="brandItemMinPrice">{{item.floor_price}}起</div>
            <img v-lazy="item.pic_url" alt />
          </router-link>
        </div>
      </div>
      <div class="newGoodsBox">
        <div class="newGoodsTitle">新品首发</div>
        <div class="newGoodsWrap">
          <a href class="newGoodsItem" v-for="item in data.newGoodsList" :key="item.id">
            <img v-lazy="item.list_pic_url" alt class="imgLazyload loadEnd" />
            <div class="newGoodsName">{{item.name}}</div>
          </a>
        </div>
      </div>
      <div class="hotGoodsBox">
        <div class="hotGoodsTitle">人气推荐</div>
        <div class="hotGoodsWrap">
          <a href class="hotGoodsItem" v-for="item in data.hotGoodsList" :key="item.id">
            <img v-lazy="item.list_pic_url" alt class="imgLazyload loadEnd" />
            <div class="hotGoodsInfos">
              <div class="hotGoodsName">{{item.name}}</div>
              <div class="hotGoodsInfo">{{item.goods_brief}}</div>
              <div class="hotGoodsPrice">￥{{item.retail_price}}</div>
            </div>
          </a>
        </div>
      </div>
      <div class="topGoodsBox">
        <div class="topGoodsTitle">专题精选</div>
        <div class="topGoodsWrap">
          <swiper :options="swiperOpt" ref="mySwiper" class="swiperOpt am-carousel">
            <swiper-slide class="slider-frame" v-for="item in data.topicList" :key="item.id">
              <ul class="slider-list">
                <li class="slider-slide">
                  <a href class="topGoodsItem">
                    <img v-lazy="item.scene_pic_url" alt class="imgLazyload loadEnd" />
                    <div class="topGoodSubTitle">
                      <span class="topGoodPrice">{{item.title}}</span>
                      ￥{{item.price_info}}起
                    </div>
                    <div class="topGoodTitle">{{item.subtitle}}</div>
                  </a>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="cateGoryBox">
        <div v-for="(item) in data.categoryList" :key="item.id">
          <div class="cateGoryName">{{item.name}}</div>
          <div class="cateGoryGoodsWrap">
            <a href class v-for="ite in item.goodsList" :key="ite.id">
              <div class="goodsItemImg">
                <img v-lazy="ite.list_pic_url" alt />
              </div>
              <div class="goodsItemName">{{ite.name}}</div>
              <div class="goodsItemPrice">￥{{ite.retail_price}}</div>
            </a>
            <a href class="categoryMoreGoods">
              <div>更多{{item.name}}好物</div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg=="
                alt
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// import 'swiper/dist/css/swiper.css'
import 'swiper/css/swiper.css'
import './css/index.css'
import Footer from '@/components/footer/index.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState, mapActions } from 'vuex'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperOpt: {
        autoplay: true,
        loop: true
      }
    }
  },
  components: {
    Footer,
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState('home', ['data'])
  },
  methods: {
    ...mapActions('home', ['updateValue']),

    handleFunny (id) {
       this.$router.history.push(`/funny/${id}`)
    }
  },
  mounted () {
    this.updateValue()
    this.scroll = new BScroll(this.$refs.tabPageContent,{
      click:true
    })
  }
}
</script>

<style lang='stylus' scoped></style>
