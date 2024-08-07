const pgp = require('pg-promise')();
require('dotenv').config();

const db = pgp({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  // No password field if not set
});

db.connect()
  .then(obj => {
    console.log('Database connected successfully');
    obj.done(); // success, release the connection
  })
  .catch(error => {
    console.error('Database connection error:', error);
  });
