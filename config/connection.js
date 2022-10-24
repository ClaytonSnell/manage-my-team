const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      password: '',
      database: 'employeetracker_db'
    },
    console.log(`Connected to the employeetracker_db database.`)
  );

  module.exports = db;