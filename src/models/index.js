const Category = require("./Category.js");
const Product = require("./Product.js");
const Image = require('./Image.js');
const Cart = require("./Cart.js");
const User = require("./User.js");
const Purchase = require("./Purchase.js");


Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(Image);
Image.belongsTo(Product);

Product.hasMany(Cart);
Cart.belongsTo(Product);

User.hasMany(Cart);
Cart.belongsTo(User);

User.hasMany(Purchase);
Purchase.belongsTo(User);

Product.hasMany(Purchase);
Purchase.belongsTo(Product);