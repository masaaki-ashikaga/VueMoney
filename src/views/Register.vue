<template>
  <div id="app">
    <h1>新規登録画面</h1>
    <label for="userName">ユーザー名</label>
    <input type="text" id="userName" placeholder="userName" v-model="userName">
    <br>
    <label for="email">メールアドレス</label>
    <input type="email" id="email" placeholder="E-mail" v-model="email">
    <br>
    <label for="password">パスワード</label>
    <input type="password" id="password" placeholder="Password" v-model="password">
    <br>
    <button class="btn btn-primary" @click="register">新規登録</button>
    <p class="mt-2"><router-link to="/login">ログインはこちらから</router-link></p>
  </div>
</template>


<script>
import axios from '../axios-auth';

export default {
    data() {
        return {
            userName: '',
            email: '',
            password: '',
        };
    },
    methods: {
        register() {
            axios.post(
                '/accounts:signUp?key=AIzaSyA8v-UzUiYBpWMr7jFiFFPWisIV203O3rA',
                {
                    email: this.email,
                    password: this.password,
                    returnSecureToken: true,
                }
            );
        }
    }
}
</script>
