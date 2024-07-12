const atendimentoModel = require("../models/atendimentoModel.cjs")

class AtendimentoController{
   buscar(){
    return atendimentoModel.listar()
   }
   criar(novoAtendimento){
    return atendimentoModel.criar(novoAtendimento)
   }
   alterar(id){
     return `Alterando atendimento número ${id}...`
   }
   deletar(id){
     return `Deletando atendimento número ${id}...`
   }
}

module.exports = new AtendimentoController()