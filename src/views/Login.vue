<template>
  <div id="app">
    <h1>ログイン画面</h1>
    <form>
        <label for="email">メールアドレス</label>
        <input type="email" id="email" placeholder="E-mail" v-model="email">
        <br>
        <label for="password">パスワード</label>
        <input type="password" id="password" placeholder="Password" v-model="password">
        <br>
        <input type="submit" class="btn btn-primary" value="ログイン" @click="login">
    </form>
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
            
        }
    },
}
</script>
