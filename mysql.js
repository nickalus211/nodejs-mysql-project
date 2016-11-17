var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'utechsapna.com',
  user: 'job_fair_test',
  password: 'mSZSiZodr6Btuwcn'
})

connection.connect()

connection.query('SELECT * FROM `job_fair_test`.`users`', function (err, rows, fields) {
  if (err) throw err

  console.log(rows)
})

connection.end()
