<template>
<div class="c">
    <h1>Show User</h1>
    <p>id: {{ user.id }}</p>
    <p>ชื่อ-นามสกุล: {{ user.name }} - {{ user.lastname }}</p>
    <p>email: {{ user.email }}</p>
    <p>password: {{ user.password }}</p>
    <br><br><br><br><br><br><br><br><br><br><br><br>
</div>
</template>

<script>
import UsersService from '@/services/UsersService'
export default {
    data() {
        return {
            user: null
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
