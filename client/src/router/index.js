import Vue from 'vue'
import Router from 'vue-router'
// Users
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
// Authen
import Login from '@/components/Login'
// UserIndex
import Userindex from '@/components/Userindex'
// AdminIndex
import Adminindex from '@/components/Adminindex'
// Booking
import BookingIndex from '@/components/Booking/Index'
import BookingCreate from '@/components/Booking/CreateBooking'
import BookingEdit from '@/components/Booking/EditBooking'
import BookingShow from '@/components/Booking/ShowBooking'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    // authen
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // userindex
    {
      path: '/Userindex',
      name: 'Userindex',
      component: Userindex
    },
    // adminindex
    {
      path: '/Adminindex',
      name: 'Adminindex',
      component: Adminindex
    },
    // Booking
    {
      path: '/bookings',
      name: 'bookings',
      component: BookingIndex
    },
    {
      path: '/booking/create',
      name: 'booking-create',
      component: BookingCreate
    },
    {
      path: '/booking/edit/:bookingId',
      name: 'booking-edit',
      component: BookingEdit
    },
    {
      path: '/booking/:bookingId',
      name: 'booking',
      component: BookingShow
    },
  ]
})