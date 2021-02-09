<template>
  <div class="header">
    <ul>
      <li
        v-for="(e, index) in ['home', 'product', 'about']"
        :key="index"
        :class="{ active: $route.name === e }"
        @click="$router.push({ name: e })"
      >
        {{ e }}
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.header {
  ul {
    display: flex;
    font-size: 18px;
    padding: 20px;
    justify-content: center;
    border-bottom: 1px solid #ededed;
    li {
      margin: 0 30px;
      color: #999;
      cursor: pointer;
      &.active {
        color: #333;
      }
    }
  }
}
</style>