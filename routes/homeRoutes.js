const express = require('express');
const router = express.Router();
const controladorHome = require('../controller/homeController');

router.get('/', controladorHome.index);

module.exports = router;