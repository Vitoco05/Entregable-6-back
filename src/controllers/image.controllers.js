const Image = require('../models/Image.js');
const catchError = require('../utils/catchError.js');
const { uploadToCloudinary, deleteFromCloudinary } = require('../utils/cloudinary.js');

const getAll = catchError(async(req, res) => {
  const images = await Image.findAll();
  return res.json(images);
});

const create = catchError(async(req, res) => {
  const { path, filename } = req.file;
  const { url } = await uploadToCloudinary(path, filename);
  const { productId } = req.body;
  const image = await Image.create({ url, productId });
  return res.json(image)
});

const remove = catchError(async(req, res) => {
  const { id } = req.params;
  const image = await Image.findByPk(id);
  if(!image) return res.status(404).json({ message: 'Image not found' });
  await deleteFromCloudinary(image.url);
  await image.destroy();
  return res.sendStatus(204);
})

module.exports = {
  getAll,
  create,
  remove
}