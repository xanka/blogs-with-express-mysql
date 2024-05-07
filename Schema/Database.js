const mysql = require('mysql')

const q = 'CREATE DATABASE IF NOT EXISTS article;';

const pool = mysql.createPool({
    host: '0.0.0.0',
    port: 54946,
    user: 'root',
    password: 'magento2',
})

pool.getConnection( (err, connection) => {
    if (err) {
        console.error(err.message)
        return
    }

    // @todo return message base on result
    connection.query(q, (error, result) => {
        if (error) {
            console.error(err)
            return
        }
    })

    console.log('Create database sucess!')
})

