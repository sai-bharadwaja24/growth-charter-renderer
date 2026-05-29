const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const accountRoutes = require("./routes/accountRoutes");
const charterRoutes = require("./routes/charterRoutes");
const extractRoutes = require("./routes/extractRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", accountRoutes);
app.use("/api", charterRoutes);
app.use("/api", extractRoutes);

app.get("/", (req, res) => {
  res.send("Backend Working");
});

console.log("Mongo URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on ${process.env.PORT || 5000}`);
});