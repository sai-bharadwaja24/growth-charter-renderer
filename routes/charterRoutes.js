const express = require("express");
const router = express.Router();
const { marked } = require("marked");

const Node = require("../models/Node");
const renderCharter = require("../services/charterRenderer");

router.get("/nodes", async (req, res) => {
  try {
    const nodes = await Node.find();
    res.json(nodes);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.get("/accounts/:id/charter", async (req, res) => {
  try {
    const markdown = await renderCharter(req.params.id);

    const html = marked.parse(markdown);

    res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Growth Charter</title>

<style>
body{
  max-width:1000px;
  margin:auto;
  padding:40px;
  font-family:Arial,sans-serif;
  line-height:1.8;
}

h1{
  color:#1e40af;
}

h2{
  color:#2563eb;
  border-bottom:1px solid #ddd;
  padding-bottom:8px;
}

table{
  width:100%;
  border-collapse:collapse;
  margin-top:20px;
}

th,td{
  border:1px solid #ddd;
  padding:12px;
  text-align:left;
}

th{
  background:#f3f4f6;
}
</style>

</head>
<body>
${html}
</body>
</html>
`);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;