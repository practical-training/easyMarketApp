<template>
  <div id='tabPageContent'>
      <div class="userMsgWrap"></div>
      <div class="userPower"></div>
      <div class="loginOut"></div>
  </div>
</template>
<script>
import Footer from "@/components/footer/index";
import { mapState, mapActions } from "vuex";
export default {
  components:{
    Footer
  },
  computed: {
    ...mapState("home", {
      homeData: "data"
    })
  },
  methods: {
    ...mapActions("home", ["updateValue"])
  },
  mounted() {
    this.updateValue();
  }
};
</script>
<style lang='scss'>

</style>
