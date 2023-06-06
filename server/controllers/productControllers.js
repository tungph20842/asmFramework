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

// Get a single product
exports.getProductById = (req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: `Product with id ${id} not found`,
        });
      }
      res.send(product);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving product.',
      });
    });
};
// Create a new product
exports.createProduct = (req, res) => {
  const { name, description, price, image } = req.body;

  const product = new Product({
    name,
    description,
    price,
    image,
  });

  product.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the product.',
      });
    });
};
