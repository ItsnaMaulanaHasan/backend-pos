"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Customers",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      favorite_product_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Products",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      total_price: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false,
      },
      transaction_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Transactions");
  },
};
