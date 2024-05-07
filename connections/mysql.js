const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '0.0.0.0',
    port: 54946,
    user: 'root',
    password: 'magento2',
    database: 'article'
});

const connect = (query, cb) => {
    connection.query(query, function (error, results) {
        if (error) throw error
        
        if (cb) {
            cb(JSON.parse(JSON.stringify(results)))
        }
    })
}
module.exports = connect;
