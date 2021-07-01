const express = require('express');
const router = express.Router();
const { getProducts, getSingleProduct } = require('../controllers/productControllers');



// @desc GET all products
// @route /api/products/
// @access public

router.get('/', getProducts);



// @desc GET a single product
// @route /api/products/:id
// @access public

router.get('/:id', getSingleProduct);


module.exports = router;