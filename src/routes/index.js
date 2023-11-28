const express = require('express');
const userRouter = require('./user.routes.js');
const categoryRouter = require('./category.routes.js');
const productRouter = require('./product.routes.js');
const imageRouter = require('./image.routes.js');
const cartRouter = require('./cart.routes.js');
const purchaseRouter = require('./purchase.routes.js');
const router = express.Router();

router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRouter);
router.use('/images', imageRouter);
router.use('/cart', cartRouter);
router.use('/purchases', purchaseRouter);

module.exports = router;