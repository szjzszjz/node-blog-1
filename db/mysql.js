const mysql = require('mysql')
const { MYSQL_CONFIG, REDIS_CONFIG } = require('../config/db')

// 创建连接对象
// const con = mysql.createConnection(MYSQL_CONFIG)
const con = mysql.createConnection(
    MYSQL_CONFIG
)

//开始连接
con.connect()

//统一执行sql函数
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, res) => {
            if (err) {
                reject(err)
                return
            }
            resolve(res)
        })
    })
    return promise
}

module.exports = {
    exec,
    escape: mysql.escape
}