const express = require('express');
const router = express.Router();

// Sample product data (Replace with actual DB logic)
const products = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 39.99 },
];

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// POST a new product (for simplicity, doesn't store in DB)
router.post('/', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
