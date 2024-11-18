// connection.js
const myDatabase =require('mysql2');

const connection = myDatabase.createConnection({
  host: 'localhost',
  user: 'root',
  password: '4309',
  database: 'da'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

// Export the connection object
module.exports = connection;
