<template>
  <div class="product">
    <h2>svg</h2>
    <h3>
      <Close fill="#f60"></Close>
    </h3>
  </div>
</template>

<script>
import Close from '@images/close.svg'

export default {
  data() {
    return {};
  },
  components: {
    Close
  }
};
</script>

<style lang="less" scoped>
.product {
  h3 {
    margin-top: 50px;
  }
}
</style>