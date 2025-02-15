const express = require("express");
const dotenv = require("dotenv");
const customerRoutes = require("./routes/customerRoutes");
// const transactionRoutes = require("./routes/transactionRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/customers", customerRoutes);
// app.use("/api/transactions", transactionRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
