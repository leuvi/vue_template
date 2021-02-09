<template>
  <div class="home">
    <h2><img :src="require('@images/logo.png')" /></h2>
    <h3>欢迎使用~</h3>
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
.home {
  text-align: center;
  .center();
  h3 {
    margin-top: 20px;
    font-size: 14px;
    color: #999;
  }
}
</style>