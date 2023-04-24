import mysql from "mysql2/promise"; // sử dụng mysql2/promise để có thể lấy createPool
// // create the connection to database
console.log("Creating connection pool...");

const pool = mysql.createPool({
    // createPool có hỗ trợ cache cho ta, để tránh người dùng reload page liên tục và server phải trả lại dữ liệu liên tục, nên sử dụng createPool để có thể dùng pool.execute để nó lưu trữ data đệm lại khi bị gọi nhiều lần mà cùng 1 data giống nhau
    host: "localhost",
    user: "root",
    database: "nodejsbasic",
    // password: 'password'
});

export default pool;

// import mysql from "mysql2";

// // create the connection to database
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "nodejsbasic",
// });

// // simple query
// connection.query(
//     'SELECT * FROM `users` ',
//     function (err, results, fields) {
//         console.log('>>> check mysql')
//         console.log(results); // results contains rows returned by server
//         let rows = results.map((row) => { return row });
//         console.log(rows); // results contains rows returned by server

//     }
// );

// export default connection;
