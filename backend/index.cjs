const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());

const appCustom = require("./config/appCustom.cjs")

appCustom(app, express)

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.listen(port, host, (error) => {
   if (error) {
      console.log("Deu erro");
      return;
   }
   console.log("Subiu show");
});