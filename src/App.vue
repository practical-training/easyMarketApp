<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapActions,mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed:{
    ...mapState("home",{
      homeData:"data"
    })
  },
  methods: {
    ...mapActions("home",["updateValue"])
  },
  mounted() {
   this.updateValue()
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
