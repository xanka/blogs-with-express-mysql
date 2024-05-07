const connect = require('../connections/mysql')

const data = "INSERT INTO Articles (title, description) VALUES ('Title 1', 'description 1'), ('Title 2', 'description 2'), ('Title 3', 'description 3');"

connect(data)