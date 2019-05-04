<template>
    <div class="menu">
        <div class="menu2">
            <div v-if="userInfo.isLogin == 'true'" style="display:inline">
                <a href="/">KART</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/#/buckets">Bucket</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/#/stats">统计</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/#/about">关于</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div v-else style="display:inline">
                <a href="/">KART</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div class="right" v-if="userInfo.isLogin == 'true'">
                <el-dropdown size="medium" placement="top-start" @command="handleCommand">
                    <span class="el-dropdown-link">
                        <!-- <img class="avatar" src="http://ischool.h3c.com:3003/gaojian/touxiang.png"> -->
                        <img class="avatar" :src="userInfo.avatar">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="accountInfo" @click="accountInfo">账号详情</el-dropdown-item>
                        <el-dropdown-item command="logout" @click="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="right login-font" v-else>
                <a href="/#/login">登录</a> |
                <a href="/#/signup">注册</a>
            </div>
                
        </div>
    </div>
</template>

<script>
export default {
    name:"NavigationBar",
    data() {
        return {
            userInfo:{
                isLogin: "false",
                avatar:"http://ischool.h3c.com:3003/gaojian/touxiang.png",
                userID:"",
                token:"",
            }
        }
    },
    mounted() {
        if (localStorage.isLogin == "true") {
            console.log("isLogin = ", localStorage.isLogin)
            this.userInfo.isLogin = localStorage.isLogin
            this.userInfo.userID = localStorage.userID
            this.userInfo.token = localStorage.token
        }else {
            console.log("not login")
            this.$router.replace({ path: "/login"})
        }
    },
    methods: {
        handleCommand(command) {
            if(command == "accountInfo") {
                this.$message("账号详情还没有完成，敬请期待");
            }else if(command == "logout") {
                console.log("logout")
                localStorage.isLogin = false;
                this.userInfo.isLogin = false;
                this.$router.replace({ path: "/login"})
                this.$message("已退出登录");
            }
        },
        accountInfo: function(event) {
            console.log("accountInfo")
        },
        logout: function(event){
            console.log("logout")
            localStorage.isLogin = false;
            this.userInfo.isLogin = false;
            this.$router.replace({ path: "/login"})
        }
    }
}
</script>

<style scoped>
@import '../css/kart.css';
</style>