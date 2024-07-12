const conexao = require("../infraestrutura/conexao.cjs")

class AtendimentoModel {
   listar(){
    const sql = "SELECT * FROM atendimentos"
     return new Promise((resolve, reject) => {
      conexao.query(sql, {}, (error, resposta) => {
         if(error){
             console.log("Deu erro no listar...")
             reject(error)
         }
         console.log("show")
         resolve(resposta)
      })
     }) 
   }

  criar(novoAtendimento){
   const sql = `INSERT INTO atendimentos SET ?`
   return new Promise((resolve, reject) => {
      conexao.query(sql, novoAtendimento, (error, resposta) => {
         if(error){
          console.log("Deu erro no listar1...")
          reject(error)
         }
         console.log("show")
         resolve(resposta)
       })
   }) 
  }

}

module.exports = new AtendimentoModel()
