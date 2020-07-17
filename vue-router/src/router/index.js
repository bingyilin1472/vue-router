// router是在這個這個index.js中去設定
// 除了要引入Router尚要引入Vue(負責告知Vue要使用Router)
import Vue from 'vue'
import Router from 'vue-router'
// @似乎是webpack一種語法，反正不用想太複雜，把想要的component file名稱加註在後面即可(有機會再深入)
// 也有一種說法是說他是到這個project的root，就是指src，可能是這個框架或者webpack是這樣設定
// 更直接的可以把它想成@/，就是進到src directory，這種便捷的方式python也有類似的方式
import HelloWorld from '@/components/Home'
// 也可以採用傳統的方式，去獲取About file，但是說實在@/方便許多，也很直觀
import About from "../components/About";
import ViewProfile from "@/components/ViewProfile";

// 告知要使用Router，這邊就會兩個物件都會使用到Vue與Router
// set vue to use this plugin called router
Vue.use(Router)

// 建立Router
// export default的輸出用法，之後這個instance可以任意名稱
export default new Router({
  // routes是一個array可以放著複數個different routes於其中for different components and applications
  routes: [
    // each route is a object因此用{...}包覆
    {
      // path就是root path加上的拜訪路徑
      // router機制使得切換頁面內容不需要拜訪server以及送出requests
      path: '/',
      // name用來給你所引到此route
      name: 'HelloWorld',
      // 要load的component當你用上面的path來visit拜訪的時候
      component: HelloWorld
    },
    {
      // url path改變成這個就能渲染about到App.vue設定的router位置
      path: '/aboutx',
      name: 'About',
      component: About
    },
    {
      // 這route希望除了path並希望可以輸入interchangeable可互換 values/parameters
      // colon: + 名稱，表示那是一個變數，這邊是有一個user_id參數/變數
      // localhost:port/profile/任意內容 <-都可以切到該route，load in ViewProfile ex: 123、dante、001 ...
      path: '/profile/:user_id',
      name: 'ViewProfile',
      component: ViewProfile
    }
  ]
})
