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
        <!--  to比較鼓勵以route name properties來去做索引
              這有利於之後更新path，等於path更動你也不需要修正這邊，因為name沒變
              也對於較複雜的path來說較好編寫，因此推薦使用這種用法
              to="routeName"
          -->
        <li><router-link to="About">About</router-link></li>
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
