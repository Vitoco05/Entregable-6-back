const express = require('express');
const { getAll, create } = require('../controllers/purchase.controllers.js');
const verifyJWT = require('../utils/verifyJWT.js');
const purchaseRouter = express.Router();

purchaseRouter.route('/')
  .get(verifyJWT, getAll)
  .post(verifyJWT, create)



module.exports = purchaseRouter;