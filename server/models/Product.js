const db = require('../configs/database')

const Product = {
    getAllProduct: (callback) => {
        return db.query("SELECT * FROM sanpham", callback)
    },

    getProductsByPricingRange: (req, callback) => {
        return db.query(`SELECT * FROM sanpham WHERE sp_gia >= ${req.body.min} AND sp_gia <= ${req.body.max} ORDER BY sp_gia ASC`, callback)
    },

    addProduct: (req, callback) => {
        return db.query("INSERT INTO sanpham(sp_id, sp_tensanpham, sp_gia, sp_hinhanh, sp_donvitinh, sp_tonkho, sp_maloai) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [req.body.idProduct, req.body.nameProduct, req.body.priceProduct, req.body.avatarName, req.body.unitProduct, req.body.stockProduct, req.body.catagoryProduct],
            callback)
    },

    deleteProduct: (req, callback) => {
        return db.query(`DELETE FROM sanpham WHERE sp_id='${req.body.id}'`, callback)
    },

    updateProduct: (req, callback) => {
        return db.query(`UPDATE sanpham SET sp_tensanpham='${req.body.name}', sp_gia='${req.body.price}', sp_hinhanh='${req.body.avatar}', sp_donvitinh='${req.body.unit}', sp_tonkho='${req.body.stock}', sp_maloai='${req.body.catagory}' WHERE sp_id='${req.body.id}'`, callback)
    },

    getProductsByCatagory: (req, callback) => {
        return db.query(`SELECT * FROM sanpham WHERE sp_maloai='${req.body.catagory}'`, callback)
    },

    getProductsByKey: (req, callback) => {
        return db.query(`SELECT * FROM sanpham WHERE sp_tensanpham LIKE '%${req.body.key}%'`, callback)
    },

    getProductById: (req, callback) => {
        return db.query(`SELECT * FROM sanpham WHERE sp_id='${req.body.id}'`, callback)
    },

    getDiscountProducts: (req, callback) => {
        return db.query(`SELECT * FROM sanpham SP JOIN sanphamkhuyenmai SPKM ON SP.sp_id = SPKM.spkm_masanpham`, callback)
    },

    getProductsSimilar: (req, callback) => {
        return db.query(`SELECT * FROM sanpham WHERE sp_maloai='${req.body.catagory}' LIMIT 5`, callback)
    },

    getEmptyProducts: (req, callback) => {
        return db.query('SELECT * FROM sanpham WHERE sp_tonkho=0', callback)
    },

    getTopProductsSaled: (req, callback) => {
        return db.query('SELECT *, SUM(CTDH.ctdh_soluong) AS totalAmount FROM sanpham SP JOIN chitietdonhang CTDH ON SP.sp_id = CTDH.ctdh_masanpham GROUP BY SP.sp_id ORDER BY totalAmount DESC LIMIT 5', callback)
    },

}

module.exports = Product;