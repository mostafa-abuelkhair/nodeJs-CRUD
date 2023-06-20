const express = require('express');
const productsRouter = require('./src/routes/products');
const productsModel = require('./src/models/productsModel');

PORT = "8080";

//getApiData() fetches the products from API and store them in array in the products model
productsModel.getApiData();

const app = express();

//this is the router for all products routes
app.use("/products",productsRouter);


app.get("/",(req,res)=>{

    res.send("Hello There,  you can use /products path to creat,read,update,delete products");

})

app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server is Listening on: http://localhost:${PORT}/`);
  });