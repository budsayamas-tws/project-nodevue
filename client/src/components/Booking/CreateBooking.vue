<template>
<div class="c">
    <h1>Create Booking</h1>
    <form v-on:submit.prevent="createBooking">
        <p>Name: <input type="text" v-model="booking.name"> Lastname: <input type="text" v-model="booking.lastname"></p>
        <p>Date: <input type="date" v-model="booking.date"> Time: <input type="text" v-model="booking.time"></p>
        <p>Tel: <input type="text" v-model="booking.tel"></p>
        <p><button class="btn btn-info" type=" submit">Create Booking</button></p>
        <br><br><br><br><br><br><br><br><br><br><br><br>
    </form>
</div>
</template>

<script>
import BookingService from '@/services/BookingService'
export default {
    data() {
        return {
            booking: {
                name: '',
                lastname: '',
                tel: '',
                date: '',
                time: ''
            }
        }
    },
    methods: {
        async createBooking() {
            try {
                await BookingService.post(this.booking)
                this.$router.push({
                    name: 'Userindex'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
.c {
    text-align: center;
    padding-top: 15%;
    background-color: PowderBlue;

}
</style>
