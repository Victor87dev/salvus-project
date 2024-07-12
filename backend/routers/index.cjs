const routerAtendimento = require("./atendimentoRoute.cjs");
module.exports = (app) => {
   app.use(routerAtendimento);
};