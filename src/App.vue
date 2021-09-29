<template>
  <div id="app">
    <div id="nav">
      <div class="container-fluid sticky-top">
        <nav class="navbar navbar-expand-md navbar-light">
          <div class="container d-flex">
            <router-link to="/"><i class="fas fa-dice-d20"></i>金魚花火</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link" to="/product"><span>商品一覽</span></router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/order"><span>查詢訂單</span></router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
      </div>
    </div>
    <div id="container">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
@import './assets/all.scss'
</style>
