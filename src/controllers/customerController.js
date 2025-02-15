const { Customer, Transaction, TransactionDetail, Product } = require("../../models");

exports.addCustomer = async (req, res) => {
  try {
    const { name, level } = req.body;
    const customer = await Customer.create({ name, level });
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCustomerDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByPk(id, {
      include: {
        model: Transaction,
        include: {
          model: TransactionDetail,
          include: Product,
        },
      },
    });
    if (!customer) return res.status(404).json({ message: "Customer not found" });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.softDeleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    await Customer.destroy({ where: { id } });
    res.json({ message: "Customer deleted (soft delete applied)" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
