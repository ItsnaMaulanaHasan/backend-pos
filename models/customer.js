"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.hasMany(models.Transaction, { foreignKey: "customer_id" });
    }
  }
  Customer.init(
    {
      name: DataTypes.STRING,
      level: DataTypes.ENUM("Warga", "Juragan", "Sultan", "Konglomerat"),
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Customer",
      tableName: "Customers",
      timestamps: false,
    }
  );
  return Customer;
};
