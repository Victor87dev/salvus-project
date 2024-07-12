const { Router } = require("express")
const router = Router()
const atendimentoController = require("../controllers/atendimentoController.cjs")

router.get("/atendimentos", (req, res)=> {
  const listaAtendimentos = atendimentoController.buscar();
  listaAtendimentos
  .then(atendimentos => res.status(200).json(atendimentos))
  .catch((error) => res.status(400).json(error.message))
})

router.post("/atendimentos", (req, res) => {
  const novoAtendimento = req.body
  const atendimento = atendimentoController.criar(novoAtendimento)
  atendimento
  .then(atendimentoCriado => res.status(200).json(atendimentoCriado))
  .catch(error => res.status(400).json(error.message))
})

router.put("/atendimento/:id", (req, res) => {
  const { id } = req.params;
  const resposta = atendimentoController.alterar(id)
  res.send(resposta)  
})

router.delete("/atendimento/:id", (req, res) => {
   const { id } = req.params;
   const resposta = atendimentoController.deletar(id)
   res.send(resposta)  
})

module.exports = router