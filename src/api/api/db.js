'use strict'
const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || 'trieubd@93710',
    database: process.env.DB_NAME || 'trieudb',
});
db.connect((err, data)=>{
    if (err) {
        throw err;
    }
    console.log('Successful')
})
module.exports = db;