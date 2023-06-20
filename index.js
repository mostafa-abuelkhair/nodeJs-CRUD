const express = require('express');
const productsRouter = require('./src/routes/products');
const productsModel = require('./src/models/productsModel');

PORT = "8080";

productsModel.getApiData();

const app = express();

app.use("/products",productsRouter);


app.get("/",(req,res)=>{

    res.send("Hello There");

})

app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server is Listening on: http://localhost:${PORT}/`);
  });