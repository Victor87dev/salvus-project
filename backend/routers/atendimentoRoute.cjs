const { Router } = require("express")
const router = Router()
const atendimentoController = require("../controllers/atendimentoController.cjs")

router.get("/atendimentos", (req, res)=> {
  const resposta = atendimentoController.buscar();
  res.send(resposta)
})

router.post("/atendimentos", (req, res) => {
  const resposta = atendimentoController.criar()
  res.send(resposta)  
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