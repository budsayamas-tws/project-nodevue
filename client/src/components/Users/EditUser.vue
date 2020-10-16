<template>
<div class="c">
    <h1>Edit User</h1>
    <form v-on:submit.prevent="editUser">
        <p>Name: <input type="text" v-model="user.name"></p>
        <p>Lastname: <input type="text" v-model="user.lastname"></p>
        <p>Email: <input type="text" v-model="user.email"></p>
        <p>Password: <input type="text" v-model="user.password"></p>
        <p><button class="btn btn-warning" type="submit">edit user</button></p>
    </form>
    <br><br><br><br><br><br><br><br><br><br><br><br>
</div>
</template>

<script>
import UsersService from '@/services/UsersService'
export default {
    data() {
        return {
            user: {
                name: '',
                lastname: '',
                email: '',
                password: '',
                status: 'active'
            }
        }
    },
    methods: {
        async editUser() {
            try {
                await UsersService.put(this.user)
                this.$router.push({
                    name: 'users'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style scoped>
.c {
    text-align: center;
    padding-top: 15%;
    background-color: DarkSeaGreen;

}
</style>
