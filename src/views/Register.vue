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
import firebase from 'firebase';
import router from '../router';

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
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
                router.push('/dashboard');
            });
        }
    }
}
</script>
