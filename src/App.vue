<template>
  <div id="app">
    <UI-HEADER></UI-HEADER>
    <div class="inner-content">
      <router-view></router-view>
    </div>
    <UI-FOOTER></UI-FOOTER>
  </div>
</template>

<script>
import UIHEADER from "@components/header.vue";
import UIFOOTER from "@components/footer.vue";

export default {
  name: 'App',
  components: {
    UIHEADER,
    UIFOOTER
  }
}
</script>

<style lang="less" scoped>
.inner-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  padding: 50px;
}
</style>