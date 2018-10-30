const express= require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('In another middleweare!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>');
});

router.post('/product', (req, res) => {
    const product = req.body;
    console.log(product);
    res.redirect('/');
});

module.exports = router;
