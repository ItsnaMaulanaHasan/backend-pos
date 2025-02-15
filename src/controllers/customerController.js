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

exports.getAllCustomersWithTransactions = async (req, res) => {
  try {
    const customers = await Customer.findAll({
      include: [
        {
          model: Transaction,
          include: [
            {
              model: Product,
              as: "favoriteProduct",
              attributes: ["id", "name", "price"],
            },
            {
              model: TransactionDetail,
              include: [
                {
                  model: Product,
                  attributes: ["name", "price"],
                },
              ],
            },
          ],
        },
      ],
    });

    if (!customers.length) {
      return res.status(404).json({ message: "No customers found" });
    }

    const formattedCustomers = customers.map((customer) => ({
      id: customer.id,
      name: customer.name,
      level: customer.level,
      favoriteMenu: customer.Transactions.length > 0 ? customer.Transactions[0].favorite_product?.name || "N/A" : "N/A",
      totalTransaction: customer.Transactions.reduce((total, transaction) => total + parseFloat(transaction.total_price), 0),
    }));

    res.json(formattedCustomers);
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

exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, level } = req.body;

    const customer = await Customer.findByPk(id);
    if (!customer) return res.status(404).json({ message: "Customer not found" });

    await customer.update({ name, level });

    res.json({ message: "Customer updated successfully", customer });
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
