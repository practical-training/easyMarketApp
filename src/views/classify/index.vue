<template>
  <div class="warper">
    <div class="header">
      <input type="text" placeholder="搜索商品,共239款好物" class="ipt" />
    </div>
    <div class="main">
      <div class="content">
        <div class="left">
          <span
            v-for="(item,index ) in data.categoryList"
            :key="index"
            @click="tab(item.id,index)"
            :class="{'check':count==index}"
          >{{item.name}}</span>
        </div>
        <div class="right">
          <div class="rightbox">
            <div
              class="imgbox"
              v-bind:style="{backgroundImage:'url(' + itemClassify.banner_url + ')',backgroundSize:'cover'}"
            >{{itemClassify.front_name}}</div>
            <span class="fg">——居家分类照片——</span>
            <div class="productbox">
              <div class="itembox">
                <div v-for="item in itemClassify.subCategoryList" :key="item.id" class="item" @click="jupfunny(item.id)">
                  <img v-lazy="item.wap_banner_url" alt />
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/footer";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      count: ""
    };
  },
  computed: {
    ...mapState("classify", ["data", "itemClassify"])
  },
  methods: {
    ...mapActions("classify", ["getinitdata", "getItemClassify"]),
    tab(id, index) {
      this.count = index;
      this.getItemClassify({ id });
    },
    jupfunny(id){
        this.$router.push(`/funny/${id}`)
    }
  },
  mounted() {
    this.getinitdata();
  },
  components: {
    Footer
  }
};
</script>
<style scoped>
@import url("css/index.css");
</style>>

