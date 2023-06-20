const express = require('express');
const {getProducts,getProductById} = require('../controllers/getProducts');

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {

  next()
});

router.get('/', getProducts);

router.get('/id/:id', getProductById);

module.exports = router;