const { Product } = require("../../models");

exports.addProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const product = await Product.create({ name, price, category });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, category } = req.body;

    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.update({ name, price, category });

    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.destroy();

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
