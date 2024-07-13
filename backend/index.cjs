const express = require('express');
const app = express();
const port = 3000;
const appCustom = require("./config/appCustom.cjs")

appCustom(app, express)

app.listen(port, (error) => {
   if(error) {
    console.log("Deu erro");
    return;
   }
   console.log("Subiu show")
});