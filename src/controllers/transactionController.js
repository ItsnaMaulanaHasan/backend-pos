const { Transaction, TransactionDetail, Product, Customer } = require("../../models");

exports.createTransaction = async (req, res) => {
  try {
    const { customer_id, products, favorite_product_id } = req.body;

    let totalPrice = 0;
    const transaction = await Transaction.create({
      customer_id,
      total_price: 0,
      favorite_product_id, // Tambahkan favorite product
    });

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

exports.getTransactionsByCustomer = async (req, res) => {
  try {
    const { customer_id } = req.params;

    const transactions = await Transaction.findAll({
      where: { customer_id },
      include: [
        {
          model: TransactionDetail,
          include: [Product],
        },
      ],
    });

    if (!transactions.length) {
      return res.status(404).json({ message: "No transactions found for this customer" });
    }

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      include: [
        {
          model: TransactionDetail,
          include: [Product],
        },
      ],
    });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { products } = req.body;

    console.log(`Updating transaction ID: ${id} with data:`, products);

    const transaction = await Transaction.findByPk(id);
    if (!transaction) {
      console.error("Transaction not found:", id);
      return res.status(404).json({ message: "Transaction not found" });
    }

    await TransactionDetail.destroy({ where: { transaction_id: id } });

    let totalPrice = 0;
    for (let { product_id, quantity } of products) {
      const product = await Product.findByPk(product_id);
      if (!product) {
        console.error("Product not found:", product_id);
        return res.status(404).json({ message: "Product not found" });
      }

      const subtotal = product.price * quantity;
      totalPrice += subtotal;

      await TransactionDetail.create({
        transaction_id: id,
        product_id,
        quantity,
        subtotal,
      });
    }

    await transaction.update({ total_price: totalPrice });

    console.log("Transaction updated successfully");
    res.json({ message: "Transaction updated successfully" });
  } catch (error) {
    console.error("Error updating transaction:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findByPk(id);
    if (!transaction) return res.status(404).json({ message: "Transaction not found" });

    await TransactionDetail.destroy({ where: { transaction_id: id } });
    await transaction.destroy();

    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
