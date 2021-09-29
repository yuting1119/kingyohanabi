<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">商品一覽</router-link> |
      <router-link to="/about">查詢訂單</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/all.scss'
</style>
