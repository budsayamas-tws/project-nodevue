<template>
<div class="c">
    <img src="https://scontent.fphs2-1.fna.fbcdn.net/v/t1.15752-9/121505195_878304136039152_7645933625844102567_n.png?_nc_cat=105&_nc_sid=ae9488&_nc_eui2=AeFa0hk8BaRPxoPRR8xmTsFfVNXz0TYSZRpU1fPRNhJlGqoecIseu6jG04HTGQtYLBEKxaLQuU38nBbrWTxmECVQ&_nc_ohc=hAq_2OVDnxsAX-2BmKN&_nc_ht=scontent.fphs2-1.fna&oh=656416fd9a9b77572a00dbde1ac6807e&oe=5FB0892E" width="20%" height="20%">
    <br><br>
    <h1>KANETNAIL BOOKING</h1>
    <p>
        <button class="btn btn-primary" v-on:click="navigateTo('/booking/create')">Booking</button>
    </p>
    <br><br><br><br><br><br><br><br><br><br><br><br>
</div>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    }
}
</script>

<style scoped>
.c {
    text-align: center;
    padding-top: 10%;
    background-color: lightblue;

}
</style>
