<template>
<div class="backd">
    <div class="login-win">
        <div class="left">
            <img src="https://cdn.pixabay.com/photo/2019/04/30/12/19/tulip-4168462_960_720.jpg" width="400px" height="400px">
        </div>
        <div class="login-win2">
            <div class="login-form">
                <form @submit.prevent="login" method="post">
                    <div class="form-group center">
                        <input type="email" class="form-control input-size" v-model="inputtext.email" placeholder="请输入邮箱">
                    </div>
                    <div class="form-group center">
                        <input type="password" class="form-control input-size" v-model="inputtext.password" id="InputPassword" placeholder="请输入密码">
                    </div>
                    <button type="submit" class="btn btn-primary input-size">登录</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:"LogIn",
    data() {
        return {
            inputtext:{}
        }
    },
    methods: {
        login: function() {
            var self = this
            console.log(this.inputtext.email)
            console.log(this.inputtext.password)
            axios({
                method:"post",
                url:"http://localhost:5000/kart/login",
                data:{
                    email:this.inputtext.email,
                    passwd:this.inputtext.password,
                }
            }).then(function(response){
                if (response.status == 200) {
                    localStorage.isLogin = true
                    localStorage.email  = response.data.email
                    localStorage.userID = response.data.id
                    localStorage.token  = response.data.token
                    localStorage.avatar = response.data.avatar
                    localStorage.nickName = response.data.nickName
                    // self.$router.go({ path: "/"})
                    window.location.href = "http://localhost:5000/"
                }
            })
        }
    }
}
</script>

<style scoped>
@import '../css/kart.css';
</style>