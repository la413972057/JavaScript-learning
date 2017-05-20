<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2 v-text="title"></h2>
    <h2 v-html="title"></h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'This is a todoList2<span>!<span>'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
