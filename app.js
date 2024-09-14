const { pool } = require("./db.js");

// async function getUsers() {
//   try {
//     // Check if the pool is connected
//     await pool.getConnection(); // Test connection
//     console.log("Database is connected");

//     // Use the pool to execute a query
//     const [rows] = await pool.query("SELECT * FROM users");
//     console.log(rows);
//   } catch (err) {
//     console.error("Database operation failed:", err.message);
//   }
// }

// // Call the function to execute the query
// getUsers();
