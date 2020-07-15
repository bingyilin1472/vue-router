<template>
    <nav class="main-nav">
      <ul>
        <!--  router-link配to attr有點類似a href的組合
              但是他有意思的是它不像a tag是到一個新的頁面
              二者都會產生一個URL path但是router-link
              是在這頁面中抽換component(one-page-web?!)
        -->
        <!--  當然也可以從address bar網址欄
              去調整path影響component的渲染      -->
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        data(){
          return{

          }
        }
    }
</script>

<style scoped>
  ul{
    list-style-type: none;
    padding: 0;
  }
</style>
