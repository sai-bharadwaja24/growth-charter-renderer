const express = require("express");
const router = express.Router();

const { extractNodes } = require("../services/geminiExtractor");

router.post("/extract-transcript", async (req, res) => {
  try {
    const { transcript } = req.body;

    if (!transcript) {
      return res.status(400).json({
        error: "Transcript is required"
      });
    }

    const nodes = await extractNodes(transcript);

    res.json(nodes);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

module.exports = router;