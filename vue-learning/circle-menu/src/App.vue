<template>
  <div id="app">
    <img src="./assets/logo.png">
    <quick-menu 
      :menu-count="getCount"
      :icon-class="icons"
      :menu-url-list="list"
      :background-color="backgroundColor"
      :color="color"
      :position="position"
      :is-open-new-tab="getIsOpenNewTab"
    ></quick-menu>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import quickMenu from './components/circle-menu'

export default {
  name: 'app',
  components: {
    'quick-menu': quickMenu
  },
  data () {
    return {
      count: 4,
      icons: ['fa fa-github', 'fa fa-comment', 'fa fa-code', 'fa fa-envelope'],
      list: ['https://github.com/AshleyLv/vue-quick-menu', 'https://www.npmjs.com/package/vue-quick-menu', 'http://www.wheelsfactory.cn/', 'http://www.wheelsfactory.cn/'],
      backgroundColor: '#17c4c5',
      color: '#ffffff',
      position: 'top-left',
      isOpenNewTab: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
