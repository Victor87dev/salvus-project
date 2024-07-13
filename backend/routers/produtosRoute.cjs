const { Router } = require("express")
const router = Router()
const produtoController = require("../controllers/produtoController.cjs")

router.get("/produtos", produtoController.buscar)

router.post("/produtos", produtoController.criar)

router.put("/produto/:id", produtoController.alterar)

router.delete("/produto/:id", produtoController.deletar)

module.exports = router