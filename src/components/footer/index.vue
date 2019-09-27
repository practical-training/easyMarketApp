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
  height:calc(0.5rem);
  background: #fff;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  font-size:14px;
}

.footer a{
  flex: 1;
  height: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  color: #000;
  text-decoration: none;
  list-style: none;
}
</style>
