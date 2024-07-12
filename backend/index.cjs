const express = require('express');
const app = express();
const port = 3000;
const router = require("./routers/index.cjs")
const conexao = require("./infraestrutura/conexao.cjs")
const tabelas = require("./infraestrutura/tabelas.cjs")

tabelas.init(conexao);

router(app);

app.listen(port, (error) => {
   if(error) {
    console.log("Deu erro");
    return;
   }
   console.log("Subiu show")
});