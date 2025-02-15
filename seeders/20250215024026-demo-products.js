"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      { name: "Laptop Asus", price: 12000000, category: "Elektronik", created_at: new Date(), updated_at: new Date() },
      { name: "iPhone 14 Pro", price: 18000000, category: "Elektronik", created_at: new Date(), updated_at: new Date() },
      { name: "TV Samsung 50 Inch", price: 7000000, category: "Elektronik", created_at: new Date(), updated_at: new Date() },
      { name: "Kursi Gaming", price: 2500000, category: "Furniture", created_at: new Date(), updated_at: new Date() },
      { name: "Meja Kerja", price: 1500000, category: "Furniture", created_at: new Date(), updated_at: new Date() },
      { name: "Mouse Logitech", price: 350000, category: "Aksesoris Komputer", created_at: new Date(), updated_at: new Date() },
      { name: "Keyboard Mechanical", price: 900000, category: "Aksesoris Komputer", created_at: new Date(), updated_at: new Date() },
      { name: "Headphone Sony", price: 2200000, category: "Audio", created_at: new Date(), updated_at: new Date() },
      { name: "Smartwatch Garmin", price: 3500000, category: "Wearable", created_at: new Date(), updated_at: new Date() },
      { name: "Sepeda Gunung", price: 4500000, category: "Olahraga", created_at: new Date(), updated_at: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
