const sql = require('mssql');

const config = {
  user: 'your_db_user',
  password: 'your_db_password',
  server: 'your_db_server.database.windows.net',
  database: 'your_db_name',
  options: {
    encrypt: true,
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};

