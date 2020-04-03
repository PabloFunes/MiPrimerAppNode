const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'sql3.freemysqlhosting.net',
        user: 'sql3330904',
        password: 'nDvkEffzxf',
        database: 'sql3330904'
    })
}