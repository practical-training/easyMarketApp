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
body,html,#app{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

#home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
