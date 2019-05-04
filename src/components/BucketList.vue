<template>
    <div class="container">
        <!-- <div class="buckets1">
            <div class="float-left">
                <button type="button" class="btn btn-primary" v-on:click="$save('', '')" style="width:150px">新建</button>
            </div>
            <div class="col-lg-4 float-right">
                <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for...">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button">Go!</button>
                </span>
                </div>
            </div>
        </div>
        <div class="buckets2">
            <div class="bucket" v-for="(item, index) in bucketList" :key="index" :bucketID="item.id"  v-on:click="redirectBucketDetail">
                <h3>{{item.name}}</h3>
            </div>
        </div> -->
        <div class="buckets4">
          <table class="table table-striped mytable">
              <thead>
                  <tr>
                      <th>Bucket 名称</th>
                      <th>文件数量</th>
                      <th>访问次数</th>
                      <th>更新时间</th>
                      <th>打包下载</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(bucket, index) in bucketList" :key="index">
                      <td><a :href="'/#/bucket/'+bucket.id">{{bucket.name}}</a></td>
                      <td>123</td>
                      <td>123</td>
                      <td>2019-05-05 12:00</td>
                      <td><a href=""></a>下载</td>
                  </tr>
              </tbody>
          </table>
        </div>
    </div>
</template>

<script>
export default {
  name: "BucketList",
  data () {
    return {
      userInfo:{
          isLogin: "false",
          avatar:"http://ischool.h3c.com:3003/gaojian/touxiang.png",
          userID:"",
          token:"",
      },
      bucketList: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function() {
    if (localStorage.isLogin == "true") {
        console.log("isLogin = ", localStorage.isLogin)
        this.userInfo.isLogin = localStorage.isLogin
        this.userInfo.userID = localStorage.userID
        this.userInfo.token = localStorage.token
    }
    console.log("token = ", this.userInfo.token)
    var self =  this
    axios({
      method:"get",
      url:"http://localhost:5000/kart/buckets",
      headers: {
        Authorization:"Token "+self.userInfo.token
      }
    }).then(function(response){
      console.log(response.data)
      if (response.status == 200) {
        self.bucketList = response.data
      } else if (response.status == 401) {
        localStorage.isLogin = false
        this.userInfo.isLogin = false
        this.$router.replace({ path: "/login"})
      }
      
    })
  },
  methods: {
    redirectBucketDetail: function(event) {
      var bucketID = event.target.getAttribute("bucketID")
      console.log("redirect to bucket ", bucketID)
      this.$router.push(
        {
          path: "/bucket/"+bucketID,
        }
     )
    }
  }
}
</script>

<style scoped>
@import '../css/kart.css';
</style>