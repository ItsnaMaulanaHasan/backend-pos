"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Customer, { foreignKey: "customer_id" });
      Transaction.belongsTo(models.Product, {
        foreignKey: "favorite_product_id",
        as: "favoriteProduct",
      });
      Transaction.hasMany(models.TransactionDetail, { foreignKey: "transaction_id" });
    }
  }
  Transaction.init(
    {
      customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Customers",
          key: "id",
        },
      },
      favorite_product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      total_price: DataTypes.DECIMAL(12, 2),
      transaction_date: DataTypes.DATE,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Transaction",
      tableName: "Transactions",
      timestamps: false,
    }
  );
  return Transaction;
};
