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
  height:1rem;
  background: #fff;
  border-top: 0.02rem solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  font-size: .24rem;
}

.footer a{
  flex: 1;
  height: 100%;
  line-height: 1rem;
  text-align: center;
  color: #000;
}
</style>
