<template>
  <div id="home">
    <div class="content">
      <div class="baaner">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
          <!-- slides -->
          <swiper-slide class="swiper-slide">
            <img src="http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg" alt="">
          </swiper-slide>
          <swiper-slide>I'm Slide 2</swiper-slide>
          <swiper-slide>I'm Slide 3</swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="nav">
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/footer/index'
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      swiperOption: {
        autoplay: 1000,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    Footer,
    swiper,
    swiperSlide
  }
}
</script>

<style>
 @import url('./index.css');
 </style>
