const express = require('express');
const {getProducts,getProductById,createProduct,updateProduct,deleteProduct} = require('../controllers/productsController');

const router = express.Router();

// middleware that is specific to this router
router.use(express.json());



//here the CURD methodes routes to it's controllers
router.get('/', getProducts);

router.get('/:id', getProductById);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;