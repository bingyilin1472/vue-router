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
        <!-- 實踐方法是採用data binding :冒號來實踐
             :to=，vue-router會期待是一個obj的形式，來做binding綁定
             這樣就會dynamically 綁定到對應的route上，並load in正確的component
         -->
        <li><router-link :to="{ name:'About' }" >About</router-link></li>
        <ul>
          <li v-for="(id, index) in userID" :key="index">
            <!-- 會發現其實:to綁定的就是，route裡面的properties，對應到一些網頁當前的值
                 router-link其實跟a href是類似的，只是他的目標是component使得efficient
             -->
            <router-link :to="{ name:'ViewProfile', params: {user_id: id}}">
              <!--  link內容，讓你知到要連去哪一個            -->
              <span>Profile {{ id }}</span>
            </router-link>
          </li>
        </ul>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        data(){
          return{
            userID:['1','2','3','4']
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
