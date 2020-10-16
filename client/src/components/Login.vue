<template>
<div class="c">
    <h1>User Login</h1>
    <form v-on:submit.prevent="onLogin">
        <p>Username: <input type="text" v-model="email" /></p>
        <p>Password: <input type="password" v-model="password" /></p>
        <p><button class="btn btn-success" type="submit">Login</button></p>
        <div class="error" v-if="error">{{error}}</div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br>
    </form>
</div>
</template>

<script>
import AuthenService from '@/services/AuthenService'

export default {
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async onLogin() {
            try {
                const response = await AuthenService.login({
                    email: this.email,
                    password: this.password
                })
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                this.$router.push({
                    name: 'Adminindex'
                })

            } catch (error) {
                console.log(error)
                this.error = error.response.data.error
                this.email = ''
                this.password = ''
            }
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
}

.c {
    text-align: center;
    padding-top: 15%;
    background-color: DarkSeaGreen;

}
</style>
