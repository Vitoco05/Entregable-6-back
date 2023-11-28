const catchError = require('../utils/catchError.js');
const Product = require('../models/Product.js');
const Category = require('../models/Category.js');
const Image = require('../models/Image.js');

const getAll = catchError(async(req, res) => {
  const product = await Product.findAll({ include: [Category, Image] });
  return res.status(200).json(product)
});

const create = catchError(async(req, res) => {
  const product = await Product.create(req.body);
  return res.status(201).json(product);  
});

const getOne = catchError(async(req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id, { include: [Category, Image] });
  return res.status(200).json(product);
});

const remove = catchError(async(req, res) => {
  const { id } = req.params;
  const product = await Product.destroy({ where: { id } });
  return res.status(204).json(product);
});

const update = catchError(async(req, res) => {
  const { id } = req.params;
  const { title, description, brand, price, categoryId } = req.body;
  const product = await Product.update(
    { title, description, brand, price, categoryId },
    { where: { id }, returning: true }
  );
  if(product[0] === 0) return res.sendStatus(404);
  return res.status(200).json(product[1][0])
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update
}