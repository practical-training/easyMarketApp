<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {

};
</script>
<style lang="scss">
body,html,#app{
  width: 100%;
  height: 100%;
  background-color: #f5f5f9;
}
html{
   font-size: calc(100/750*100vw)
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

</style>
