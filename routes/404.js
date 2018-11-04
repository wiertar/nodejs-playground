const express = require('express');

const router = express.Router();

const errorsController = require('../controllers/errors');

router.get(errorsController.get404);

module.exports = router;