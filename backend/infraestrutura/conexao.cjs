const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: "monorail.proxy.rlwy.net",
  port: 40709,
  user: "root",
  password: "jVAOYUZzRwHnmqybpUUCcqlxZgVKNZej",
  database: "railway",
});

module.exports = conexao;