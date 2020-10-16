<template>
<div class="c">
    <br>
    <h2>Get all booking</h2>
    <h4>จํานวนผู้ใช้งาน {{bookings.length}}</h4>

    <div v-for="booking in bookings" v-bind:key="booking.id">
        <p>id: {{ booking.id }}</p>
        <p>ชือ-นามสกุล: {{ booking.name }} - {{ booking.lastname }}</p>
        <p>tel: {{ booking.tel }}</p>
        <p>date: {{ booking.date }}</p>
        <p>time: {{ booking.time }}</p>
        <p><button class="btn btn-secondary" v-on:click="navigateTo('/booking/'+ booking.id)">ดูข้อมูลผู้ใช้</button>
            <button class="btn btn-warning" v-on:click="navigateTo('/booking/edit/'+ booking.id)">แก้ไขข้อมูล
            </button>
            <button class="btn btn-danger" v-on:click="deleteUser(booking)">ลบข้อมูล</button>
        </p>
        <hr>
    </div>
</div>
</template>

<script>
import BookingService from '@/services/BookingService'
export default {
    data() {
        return {
            bookings: []
        }
    },
    async created() {
        this.bookings = (await BookingService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteUser(booking) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await BookingService.delete(booking)
                    this.bookings = (await BookingService.index()).data
                } catch (err) {
                    console.log(err)
                }
            }
        },
        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'login'
            })
        },
    }
}
</script>

<style scoped>
.c {
    text-align: center;
    background-color: PowderBlue;

}
</style>
