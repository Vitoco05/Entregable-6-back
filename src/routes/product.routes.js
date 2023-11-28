const express = require('express');
const { getAll, create, getOne, remove, update } = require('../controllers/product.controllers.js');
const verifyJWT = require('../utils/verifyJWT.js');
const productRouter = express.Router();


productRouter.route('/')
  .get(getAll)
  .post(verifyJWT, create);

productRouter.route('/:id')
  .get(getOne)
  .delete(verifyJWT, remove)
  .put(verifyJWT, update);
  
module.exports = productRouter;  