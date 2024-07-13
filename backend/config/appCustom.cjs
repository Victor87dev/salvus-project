const router = require("../routers/index.cjs")
const conexao = require("../infraestrutura/conexao.cjs")
const tabelas = require("../infraestrutura/tabelas.cjs")

module.exports = (app, express) => {
    router(app, express)
    tabelas.init(conexao)
}
