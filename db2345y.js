// // db.js
// const mysql = require("mysql2");

// // Create a connection pool (recommended for production use)
// const pool = mysql.createPool({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASSWORD || "", // Ensure this is correctly read
//   database: process.env.DB_DATABASE || "zook_stays",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// // Create a promise-based version of the pool
// const promisePool = pool.promise();

// // db.js
// console.log("Database Host:", process.env.DB_HOST);
// console.log("Database User:", process.env.DB_USER);
// console.log("Database Password:", process.env.DB_PASSWORD); // Be cautious with this in production
// console.log("Database Name:", process.env.DB_DATABASE);

// // Export the promise-based pool
// module.exports = promisePool;

// 2nd
// const mysql = require("mysql2/promise");

// const connection = await mysql.createConnection({
//   host: "localhost",
//   user: "root", // Make sure this user exists
//   password: "", // Ensure correct password is provided
//   database: "zook_stays",
// });

// // Execute a simple query
// const [rows, fields] = await connection.execute("SELECT * FROM users");

// 3rdconst mysql = require("mysql2/promise");

// Create a pool of connectionsconst mysql = require("mysql2/promise");

// Create a pool of connections
// Import the mysql2/promise module using CommonJSconst mysql = require('mysql2/promise');

// Create a pool of connectionsconst mysql = require('mysql2/promise');

// Create a pool of connections
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // Default XAMPP password
  database: "zook_stays",
});

// sghtgweeq
module.exports = { pool };
console.log(pool, "wsedrftghyyeweqrq");
