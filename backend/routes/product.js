const express = require('express');
const Product = require('../models/productSchema');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// @desc GET all products
// @route /api/products/
// @access public

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}))

// @desc GET a single product
// @route /api/products/:id
// @access public

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product);
    else {
        res.status(404)
        throw new Error('Product Not Found')
    }
}))




module.exports = router;