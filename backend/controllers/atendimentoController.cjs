class AtendimentoController{
   buscar(){
    return "Buscando atendimentos"
   }
   criar(){
    return "Criando atendimento..."
   }
   alterar(id){
     return `Alterando atendimento número ${id}...`
   }
   deletar(id){
     return `Deletando atendimento número ${id}...`
   }
}

module.exports = new AtendimentoController()