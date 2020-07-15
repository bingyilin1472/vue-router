<template>
    <div class="view-profile">
      <!-- 當你改變，route的parameter時候這並不會更動
           因為其實就算你改了path中的參數，他對應到component是沒變動的
           為了節省資源，是不會再去創建一個component instance來渲染
           因此只有，你頁面refresh、reload才會更新內容
      -->
      <h2>Profile {{ user_id }}</h2>
    </div>
</template>

<script>
    export default {
        name: "ViewProfile",
        data(){
          return{
            // this就是指當前instance所在route，也就是他被load in，時候的route拜訪，會對應到拜訪他的parameters
            user_id: this.$route.params.user_id
          }
        },
        methods:{
          updateID(){
            // 當前的route para變化就更新到，當前instance data的內容
            this.user_id = this.$route.params.user_id
          }
        },
        // 可用來觀測某變數的變化，當變化時做出react
        // 這邊意思是盯著$route object，因為是泛指所有instance都會監督，因此不要this.$route
        // 當有變化就會呼叫methodName對應的method，除了可以做某些處理，也可以避免掉component recycling機制
        // 使得route的para變化也能產生更新
        watch:{
          $route: 'updateID'
        }
    }
</script>

<style scoped>

</style>
