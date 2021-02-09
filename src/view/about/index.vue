<template>
  <div class="about">
    <h2>序列帧动画</h2>
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.about {
  .center();
  .loading {
    margin-top: 50px;
    width: 40px;
    height: 40px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: url("~@images/loading.png") no-repeat;
      background-size: 400px 40px;
      animation: loading .5s step-end infinite;
    }
  }
}
@keyframes loading {
  .frameAnimate(10, 40)
}
</style>