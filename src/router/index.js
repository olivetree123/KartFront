import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BucketList from '@/components/BucketList'
import BucketDetail from '@/components/BucketDetail'
import LogIn from '@/components/LogIn'
import ECharts from 'vue-echarts'
import ElementUI from 'element-ui'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'


Vue.use(Router)
Vue.use(ElementUI)
Vue.component('v-echart', ECharts)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/buckets",
      name: "BucketList",
      component: BucketList
    },
    {
      "path": "/bucket/:bucketID",
      name: "BucketDetail",
      component: BucketDetail 
    },
    {
      path:"/login",
      name:"LogIn",
      component: LogIn 
    }
  ]
})
