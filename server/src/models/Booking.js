module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        tel: DataTypes.STRING,
        date: DataTypes.STRING,
        time:DataTypes.STRING
    })
    return Booking
}