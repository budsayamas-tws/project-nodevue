<template>
<div class="c">
    <h1>Show Booking</h1>
    <p>id: {{ booking.id }}</p>
    <p>ชื่อ-นามสกุล: {{ booking.name }} - {{ booking.lastname }}</p>
    <p>tel: {{ booking.tel }}</p>
    <p>date: {{ booking.date }}</p>
    <p>time: {{ booking.time }}</p>
    <br><br><br><br><br><br><br><br><br><br><br><br>
</div>
</template>

<script>
import BookingService from '@/services/BookingService'
export default {
    data() {
        return {
            booking: null
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
