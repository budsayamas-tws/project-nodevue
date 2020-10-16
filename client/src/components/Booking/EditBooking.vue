<template>
<div class="c">
    <h1>Edit Booking</h1>
    <form v-on:submit.prevent="editBooking">
        <p>name: <input type="text" v-model="booking.name"></p>
        <p>lastname: <input type="text" v-model="booking.lastname"></p>
        <p>tel: <input type="text" v-model="booking.tel"></p>
        <p>date: <input type="date" v-model="booking.date"></p>
        <p>time: <input type="text" v-model="booking.time"></p>
        <p><button class="btn btn-warning" type="submit">edit booking</button></p>
    </form>
    <br><br><br><br><br><br><br><br><br><br><br><br>
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
                time: '',
            }
        }
    },
    methods: {
        async editBooking() {
            try {
                await BookingService.put(this.booking)
                this.$router.push({
                    name: 'bookings'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let bookingId = this.$route.params.bookingId
            this.booking = (await BookingService.show(bookingId)).data
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
    background-color: PowderBlue;

}
</style>
