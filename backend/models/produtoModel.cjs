const conexao = require("../infraestrutura/conexao.cjs")

class ProdutoModel {
   executaQuery(sql, parametros = ""){
     return new Promise((resolve, reject) => {
      conexao.query(sql, parametros, (error, resposta) => {
        if(error){
         return reject(error)
        }
        return resolve(resposta)
      })
     })
   }

   listar(){
    const sql = "SELECT * FROM produtos"
     return this.executaQuery(sql) 
   }

  criar(novoProduto){
   const sql = `INSERT INTO produtos SET ?`
   return this.executaQuery(sql, novoProduto)
  }

  atualizar(produtoAtualizado, id){
   const sql = "UPDATE produtos SET ? WHERE id = ?"
   return this.executaQuery(sql, [produtoAtualizado, id]) 
  }

  delete(id){
   const sql = "DELETE FROM produtos WHERE id = ?"
   return this.executaQuery(sql, id)
  }

}

module.exports = new ProdutoModel()
