const express = require('express');
const productsRouter = require('./src/routes/products');

PORT = "8080";

const app = express();

app.use("/products",productsRouter);


app.get("/",(req,res)=>{

    res.send("Hello There");

})

app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server is Listening on: http://localhost:${PORT}/`);
  });