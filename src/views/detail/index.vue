<template>
  <div class="warper2">
     <div class="header">
      <i @click="goback">&lt;</i>
      <span>{{tit}}</span>
      <i></i>
    </div>
    <div class="main">

    </div>
    <div class="carfooter">

    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
        id:"",
        tit:""
    };
  },
  computed: {
      ...mapState("product",["data"])
  },
  methods:{
      ...mapActions("product",["productDetil"]),
       goback(){
      this.$router.go(-1)
    }
  },
  mounted(){
      this.id=this.$route.params.id
      this.productDetil({id:this.id})
      this.tit=this.data.info.name
      console.log(this.data.info.name, '')
  }
};
</script>
<style>
@import url("css/index.css");
</style>