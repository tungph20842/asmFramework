const Product = require('../models/product');

// Get all products
exports.getAllProducts = (req, res) => {
  Product.find()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving products.',
      });
    });
};
