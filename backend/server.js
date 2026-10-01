const express = require("express");
const cors = require("cors");
const authRoute = require("./src/routes/authRoute");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.listen(3000, () => {
  console.log("Server running on port 3000");
});