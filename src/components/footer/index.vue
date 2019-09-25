<template>
  <div class='footer'>
    <router-link to='/home'>
      <i></i>
      <span>首页</span>
    </router-link>
    <router-link to='/special'>
      <i></i>
      <span>专题</span>
    </router-link>
    <router-link to='/classify'>
      <i></i>
      <span>分类</span>
    </router-link>
    <router-link to='/car'>
      <i></i>
      <span>购物车</span>
    </router-link>
    <router-link to='/mine'>
      <i></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<style lang="scss">
.footer{
  width: 100%;
  height: 50px;
  background: #fff;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
}

.footer a{
  flex: 1;
  height: 100%;
  line-height: 50px;
  text-align: center;
  color: #000;
  text-decoration: none;
   list-style: none;
}
</style>
