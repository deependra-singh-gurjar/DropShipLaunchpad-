const Product = require('../models/Product');

// Fetch all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();  // assuming you're using a database model like MongoDB or SQL
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const { name, price, category } = req.body;
  try {
    const newProduct = new Product({ name, price, category });
    await newProduct.save();  // Assuming MongoDB
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error creating product', error: err });
  }
};
