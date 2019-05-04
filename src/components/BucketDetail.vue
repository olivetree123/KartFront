<template>
    <div class="container">
        <div class="buckets1">
            <div class="float-left">
                BUCKET
            </div>
            <div class="col-lg-4 float-right">
                <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for...">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button">Go!</button>
                </span>
                </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->
        </div>
        <div class="buckets4">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>文件名称</th>
                        <th>大小</th>
                        <th>访问次数</th>
                        <th>更新时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in fileList" :key="index">
                        <td>
                            <input type="checkbox" :value="item.FileID"> 
                        </td>
                        <td><a :href="'/kart/file/'+item.FileID">{{item.FileName}}</a></td>
                        <td></td>
                        <td>123</td>
                        <td>{{item.UpdateTime}}</td>
                        <td><a :href="'/kart/file/'+item.FileID">下载</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "Bucket",
    data() {
        return {
            fileList:[],
            userInfo:{
                isLogin: "false",
                avatar:"http://ischool.h3c.com:3003/gaojian/touxiang.png",
                userID:"",
                token:"",
            },
        }
    },
    mounted: function() {
        var self = this
        if (localStorage.isLogin == "true") {
            console.log("isLogin = ", localStorage.isLogin)
            this.userInfo.isLogin = localStorage.isLogin
            this.userInfo.userID = localStorage.userID
            this.userInfo.token = localStorage.token
        }
        console.log(this.$route.params.bucketID)
        var bucketID = this.$route.params.bucketID
        axios({
            method:"get",
            url:"/kart/files/"+bucketID,
            headers: {
                Authorization:"Token "+self.userInfo.token
            }
        }).then(function(response){
            console.log(response.data)
            self.fileList = response.data
        })
    }
}
</script>

<style scoped>
@import '../css/kart.css';
</style>

