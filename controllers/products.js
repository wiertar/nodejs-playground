const products = [];

exports.products = products;

exports.getAddProduct = (req, res, next) => {
    res.render('add-product');
};

exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
};