const { sql, poolPromise } = require('../config/db');

class User {
  static async createUser(username, passwordHash) {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('username', sql.VarChar, username)
      .input('passwordHash', sql.VarChar, passwordHash)
      .query('INSERT INTO Users (username, passwordHash) VALUES (@username, @passwordHash)');
    return result;
  }

  static async findUserByUsername(username) {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('username', sql.VarChar, username)
      .query('SELECT * FROM Users WHERE username = @username');
    return result.recordset[0];
  }
}

module.exports = User;

