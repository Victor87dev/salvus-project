const { Router } = require("express")
const router = Router()
const atendimentoController = require("../controllers/atendimentoController.cjs")

router.get("/atendimentos", atendimentoController.buscar)

router.post("/atendimentos", atendimentoController.criar)

router.put("/atendimento/:id", atendimentoController.alterar)

router.delete("/atendimento/:id", atendimentoController.deletar)

module.exports = router