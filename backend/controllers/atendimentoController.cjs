const atendimentoModel = require("../models/atendimentoModel.cjs")

class AtendimentoController{
   buscar(){
    return atendimentoModel.listar()
   }
   criar(novoAtendimento){
    return atendimentoModel.criar(novoAtendimento)
   }
   alterar(atendimentoAtualizado, id){
     return atendimentoModel.atualizar(atendimentoAtualizado, id)
   }
   deletar(id){
     return atendimentoModel.delete(id)
   }
}

module.exports = new AtendimentoController()