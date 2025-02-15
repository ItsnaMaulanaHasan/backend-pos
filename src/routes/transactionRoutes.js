const express = require("express");
const { createTransaction, getAllTransactions, getTransactionsByCustomer, updateTransaction, deleteTransaction } = require("../controllers/transactionController"); // Pastikan path ini benar

const router = express.Router();

router.post("/", createTransaction);
router.get("/", getAllTransactions);
router.get("/:customer_id", getTransactionsByCustomer);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

module.exports = router;
