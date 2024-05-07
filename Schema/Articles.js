const connect = require('../connections/mysql');

const articlesSchema = 'CREATE TABLE IF NOT EXISTS Articles (id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255),description VARCHAR(255),createAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)'

const resultFn = (result) => {
    console.log(result)
}

connect(articlesSchema, resultFn());

