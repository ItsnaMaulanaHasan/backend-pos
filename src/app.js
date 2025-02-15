const express = require("express");
const dotenv = require("dotenv");
const customerRoutes = require("./routes/customerRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/customers", customerRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/products", productRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
