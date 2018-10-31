const products = require('./products').products;

exports.getShop = (req, res, next) => {
    res.render('shop', {products: products, docTitle: 'Shop'});
};