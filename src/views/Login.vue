<template>
  <div id="app">
    <h1>ログイン画面</h1>
    <label for="email">メールアドレス</label>
    <input type="email" id="email" placeholder="E-mail" v-model="email">
    <br>
    <label for="password">パスワード</label>
    <input type="password" id="password" placeholder="Password" v-model="password">
    <br>
    <button class="btn btn-primary" @click="login">ログイン</button>
    <p class="mt-2"><router-link to="/register">新規登録はこちらから</router-link></p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login(){
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password,
            });
            this.password = '';
        }
    },
}
</script>
