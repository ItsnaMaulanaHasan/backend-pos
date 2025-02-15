const express = require("express");
const { addCustomer, getCustomerDetails, softDeleteCustomer } = require("../controllers/customerController");

const router = express.Router();

router.post("/", addCustomer);
router.get("/:id", getCustomerDetails);
router.delete("/:id", softDeleteCustomer);

module.exports = router;
