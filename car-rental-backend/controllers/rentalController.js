const { sql, poolPromise } = require('../config/db');

const getRentals = async (req, res) => {
  const userId = req.user.id;
  const pool = await poolPromise;
  const result = await pool.request()
    .input('userId', sql.Int, userId)
    .query('SELECT * FROM Rentals WHERE userId = @userId');
  res.json(result.recordset);
};

module.exports = { getRentals };

