<template>
  <div id="app">
    <Navbar />
    <img src="./assets/logo.png">
    <!--  會隨著拜訪的url不同，渲染不同的component到以下位置router-view -->
    <router-view/>
  </div>
</template>

<script>
  // 註冊component，也是用src符號@(project)，也可以改用.(相對路徑)
  import Navbar from "@/components/Navbar"
  export default {
    name: 'App',
    components: {Navbar},
    comments: {
      // 註冊component
      Navbar
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
