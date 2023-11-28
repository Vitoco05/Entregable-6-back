const catchError = require('../utils/catchError');
const Purchase = require('../models/Purchase.js');
const Cart = require('../models/Cart.js');
const Image = require('../models/Image.js');
const Product = require('../models/Product.js');


const getAll = catchError(async(req, res) => {
  const userId = req.user.id
  const purchases = await Purchase.findAll({ 
    where: { userId: userId },
    include: [{
      model: Product,
      include: [Image]
    }] 
  });
  return res.json(purchases);
});

const create = catchError(async(req, res) => {
  const cart = await Cart.findAll({
    where: { userId: req.user.id },
    attributes: ['userId', 'productId', 'quantity'],
    raw: true
  });

  const purchases = await Purchase.bulkCreate(cart);
  await Cart.destroy({ where: { userId: req.user.id } });

  return res.json(purchases);
});



module.exports = {
  getAll,
  create    
}