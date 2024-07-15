const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors({
   origin: 'http://localhost:5173'
}));

const appCustom = require("./config/appCustom.cjs")

appCustom(app, express)

app.listen(port, (error) => {
   if(error) {
    console.log("Deu erro");
    return;
   }
   console.log("Subiu show")
});