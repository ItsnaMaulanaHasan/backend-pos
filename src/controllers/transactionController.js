const Transaction = require("../../models/Transaction");
const TransactionDetail = require("../../models/TransactionDetail");
const Product = require("../../models/Product");

exports.createTransaction = async (req, res) => {
  try {
    const { customer_id, products } = req.body; // products = [{ product_id, quantity }]

    let totalPrice = 0;
    const transaction = await Transaction.create({ customer_id, total_price: 0 });

    for (let { product_id, quantity } of products) {
      const product = await Product.findByPk(product_id);
      if (!product) return res.status(404).json({ message: "Product not found" });

      const subtotal = product.price * quantity;
      totalPrice += subtotal;

      await TransactionDetail.create({
        transaction_id: transaction.id,
        product_id,
        quantity,
        subtotal,
      });
    }

    await transaction.update({ total_price: totalPrice });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
