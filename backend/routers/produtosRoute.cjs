const { Router } = require("express")
const router = Router()
const produtoController = require("../controllers/produtoController.cjs")

router.get("/produtos", produtoController.buscar)

router.get("/produtos/:id", produtoController.buscar1)

router.post("/produtos", produtoController.criar)

router.put("/produto/:id", produtoController.alterar)

router.delete("/produto/:id", produtoController.deletar)

module.exports = router