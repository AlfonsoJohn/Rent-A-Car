const { sql, poolPromise } = require('../config/db');

const createRental = async (userId, carType, pickUpLocation, dropOffLocation, pickUpTime, dropOffTime) => {
  const pool = await poolPromise;
  await pool.request()
    .input('userId', sql.Int, userId)
    .input('carType', sql.NVarChar, carType)
    .input('pickUpLocation', sql.NVarChar, pickUpLocation)
    .input('dropOffLocation', sql.NVarChar, dropOffLocation)
    .input('pickUpTime', sql.DateTime, pickUpTime)
    .input('dropOffTime', sql.DateTime, dropOffTime)
    .query('INSERT INTO car_rentals (userId, carType, pickUpLocation, dropOffLocation, pickUpTime, dropOffTime) VALUES (@userId, @carType, @pickUpLocation, @dropOffLocation, @pickUpTime, @dropOffTime)');
};

const findRentalsByUserId = async (userId) => {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('userId', sql.Int, userId)
    .query('SELECT * FROM car_rentals WHERE userId = @userId');
  return result.recordset;
};

module.exports = { createRental, findRentalsByUserId };


