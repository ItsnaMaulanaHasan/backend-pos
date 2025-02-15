const express = require("express");
const { addCustomer, getAllCustomersWithTransactions, getCustomerDetails, updateCustomer, softDeleteCustomer } = require("../controllers/customerController");

const router = express.Router();

router.post("/", addCustomer);
router.get("/", getAllCustomersWithTransactions);
router.get("/:id", getCustomerDetails);
router.put("/:id", updateCustomer);
router.delete("/:id", softDeleteCustomer);

module.exports = router;
