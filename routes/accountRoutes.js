const express = require("express");
const router = express.Router();
const Account = require("../models/Account");

router.get("/accounts", async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;