const { sql, poolPromise } = require('../config/db');

const createUser = async (username, passwordHash) => {
  const pool = await poolPromise;
  await pool.request()
    .input('username', sql.NVarChar, username)
    .input('passwordHash', sql.NVarChar, passwordHash)
    .query('INSERT INTO users (username, passwordHash) VALUES (@username, @passwordHash)');
};

const findUserByUsername = async (username) => {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('username', sql.NVarChar, username)
    .query('SELECT * FROM users WHERE username = @username');
  return result.recordset[0];
};

module.exports = { createUser, findUserByUsername };

