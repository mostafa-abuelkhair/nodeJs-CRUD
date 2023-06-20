
const productsModel = require('../models/productsModel');

exports.getProducts  =  (req,res) => {

    res.send(productsModel.get());

}
    
    
exports.getProductById  =  (req,res) => {
    
     res.send( productsModel.find(req.params.id) || "Product not found" );
        
}


exports.createProduct  =  (req,res) => {

    let p = req.body;
    
    res.send( productsModel.create(p) );
       
}

exports.updateProduct =  (req,res) => {
    
    let id = req.params.id;
    let p = req.body;
    
    res.send( productsModel.update(id,p) );
       
}


exports.deleteProduct  =  (req,res) => {
    
    let id = req.params.id;
    
    res.send( productsModel.delete(id) );
       
}





