"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      { name: "Nasi Goreng Spesial", price: 35000, category: "Makanan", created_at: new Date(), updated_at: new Date() },
      { name: "Ayam Bakar Taliwang", price: 45000, category: "Makanan", created_at: new Date(), updated_at: new Date() },
      { name: "Sate Ayam Madura", price: 40000, category: "Makanan", created_at: new Date(), updated_at: new Date() },
      { name: "Gado-Gado Jakarta", price: 30000, category: "Makanan", created_at: new Date(), updated_at: new Date() },
      { name: "Soto Betawi", price: 38000, category: "Makanan", created_at: new Date(), updated_at: new Date() },
      { name: "Rendang Padang", price: 50000, category: "Makanan", created_at: new Date(), updated_at: new Date() },
      { name: "Pempek Palembang", price: 32000, category: "Makanan", created_at: new Date(), updated_at: new Date() },
      { name: "Tahu Gejrot", price: 20000, category: "Makanan", created_at: new Date(), updated_at: new Date() },
      { name: "Bakso Malang", price: 28000, category: "Makanan", created_at: new Date(), updated_at: new Date() },
      { name: "Mie Ayam Bakso", price: 27000, category: "Makanan", created_at: new Date(), updated_at: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
