const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const BookingController = require('./controllers/BookingController')
const isAuthenController = require('./authen/isAuthenController')
module.exports = (app) => {
    /* RESFUL Api for users management */
    // create user
    app.post('/user',
        UserController.create
    )
    // edit user, suspend, active
    app.put('/user/:userId',
        UserController.put
    )
    // delete user
    app.delete('/user/:userId',
        UserController.remove
    )
    // get user by id
    app.get('/user/:userId',
        UserController.show
    )
    // get all user
    app.get('/users',
        isAuthenController,
        UserController.index
    )
    //login
    app.post('/login',
        UserAuthenController.login
    )
    // create booking
    app.post('/booking',
        BookingController.create
    )
    // edit booking, suspend, active
    app.put('/booking/:bookingId',
        BookingController.put
    )
    // delete booking
    app.delete('/booking/:bookingId',
        BookingController.remove
    )
    // get booking by id
    app.get('/booking/:bookingId',
        BookingController.show
    )
    // get all booking
    app.get('/bookings',
        BookingController.index
    )
}