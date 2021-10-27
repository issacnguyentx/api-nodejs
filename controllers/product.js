const Product = require('../models/product')

const getAllProducts = async (req, res) => {
    res.status(200).json({msg:'Product routes'})
}

module.exports = {getAllProducts}