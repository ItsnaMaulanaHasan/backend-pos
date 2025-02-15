"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TransactionDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Detail transaksi milik satu transaksi
      TransactionDetail.belongsTo(models.Transaction, { foreignKey: "transaction_id" });

      // Detail transaksi milik satu produk
      TransactionDetail.belongsTo(models.Product, { foreignKey: "product_id" });
    }
  }
  TransactionDetail.init(
    {
      transaction_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Transactions",
          key: "id",
        },
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      quantity: DataTypes.INTEGER,
      subtotal: DataTypes.DECIMAL(12, 2),
    },
    {
      sequelize,
      modelName: "TransactionDetail",
      tableName: "transactiondetails",
      timestamps: false,
    }
  );
  return TransactionDetail;
};
