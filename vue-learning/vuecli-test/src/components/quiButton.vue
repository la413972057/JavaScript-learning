<template>
  <button class="qui-btn" @click="btnClickEvent">
    <slot name="icon"></slot>
    <span>{{ msg }}</span>
  </button>
</template>

<script>
  export default {
    props: {
      msg: {
        default: '默认message'
      }
    },
    methods: {
      btnClickEvent: function () {
        console.log('触发组件qui-button的点击事件')
        this.$emit('btnClickEvent')
      }
    }

  }
</script>

<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';
</style>
