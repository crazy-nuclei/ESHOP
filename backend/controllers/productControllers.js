const Product = require('../models/productSchema');
const asyncHandler = require('express-async-handler');



const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
})

const getSingleProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product);
    else {
        res.status(404)
        throw new Error('Product Not Found')
    }
})

module.exports = { getProducts, getSingleProduct };