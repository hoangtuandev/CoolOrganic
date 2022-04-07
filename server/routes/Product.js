const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

const db = require('../configs/database');

router.get('/products', (req, res) => {
    Product.getAllProduct((err, result) => {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
})

router.post('/products/getProductsByPricingRange', (req, res) => {
    Product.getProductsByPricingRange(req, (err, result) => {
        if (err) { console.log(err) }
        else { res.send(result) }
    })
})

router.post('/products/addProduct', (req, res) => {
    Product.addProduct(req, (err, result) => {
        if (err) { console.log(err) }
        else { res.send(result) }
    })
})

router.post("/products/deleteProduct", (req, res) => {
    Product.deleteProduct(req, (err, result) => {
        if (err) { console.log(err) }
        else { res.send(result) }
    })
})

router.post('/product/updateProduct', (req, res) => {
    Product.updateProduct(req, (err, result) => {
        if (err) { console.log(err) }
        else { res.send(result) }
    })
})

router.post('/fruits', (req, res) => {
    Product.getProductsByCatagory(req, (err, result) => {
        if (err) { console.log(err) }
        else { res.send(result) }
    })
})

router.post('/vegetables', (req, res) => {
    Product.getProductsByCatagory(req, (err, result) => {
        if (err) { console.log(err) }
        else { res.send(result) }
    })
})
router.post('/meats', (req, res) => {
    Product.getProductsByCatagory(req, (err, result) => {
        if (err) { console.log(err) }
        else { res.send(result) }
    })
})

router.post('/drys', (req, res) => {
    Product.getProductsByCatagory(req, (err, result) => {
        if (err) { console.log(err) }
        else { res.send(result) }
    })
})

router.post('/juices', (req, res) => {
    Product.getProductsByCatagory(req, (err, result) => {
        if (err) { console.log(err) }
        else { res.send(result) }
    })
})

router.post('/products/getByKey', (req, res) => {
    Product.getProductsByKey(req, (err, result) => {
        if (err) { console.log(err) }
        else { res.send(result) }
    })
})

router.post('/products/ProductById', (req, res) => {
    Product.getProductById(req, (err, result) => {
        if (err) { console.log(err) }
        else { res.send(result) }
    })
})

router.get('/discountProducts', (req, res) => {
    Product.getDiscountProducts(req, (err, result) => {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
})

router.post('/products/similarProduct', (req, res) => {
    Product.getProductsSimilar(req, (err, result) => {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
})

router.post('/products/getLimitFour', (req, res) => {
    db.query(`SELECT * FROM sanpham WHERE sp_maloai='${req.body.catagory}' LIMIT 4`, (err, result) => {
        if (err) { console.log(err) }
        else { res.send(result) }
    })
})

router.get('/products/emptyProducts', (req, res) => {
    Product.getEmptyProducts(req, (err, result) => {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
})

router.get('/products/topProductsSaled', (req, res) => {
    Product.getTopProductsSaled(req, (err, result) => {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
})

module.exports = router;