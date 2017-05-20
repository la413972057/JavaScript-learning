<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <!--<h2 v-text="title2"></h2>-->
    <!--<h2 v-html="title2"></h2>-->

    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinished(item)">
        {{ item.label}}
      </li>
    </ul>
    <input type="text" v-model="newItem" @keyup.enter="addItem()" placeholder="请输入一个新项目">
  </div>
</template>

<script>
import Store from './store'

export default {
  data(){
      return {
        title: 'This is a TodoList1',
        title2: '<span>This is a TodoList1</span>',
        newItem: '',
        items: Store.fetch()
      }
  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items);
      },
      deep: true
    }
  },
  methods: {
    toggleFinished (item) {
      item.isFinished = !item.isFinished;
    },
    addItem () {
      console.log(this.items);
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = '';
    }
  }
}
</script>

<style>
.finished {
  text-decoration: line-through;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
