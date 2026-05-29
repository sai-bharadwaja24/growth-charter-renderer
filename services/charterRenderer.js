const Account = require("../models/Account");
const Node = require("../models/Node");

const renderMap = require("../render-map.json");
const template = require("./growth-charter-template");

async function renderCharter(accountId) {
  const account = await Account.findById(accountId);

  if (!account) {
    throw new Error("Account not found");
  }

  const nodes = await Node.find({ accountId });

  const placeholders = {
    companyName: account.companyName,
    businessDescription: account.businessDescription,
  };

  nodes.forEach((node) => {
    if (renderMap[node.nodeId]) {
      placeholders[node.nodeId] =
        renderMap[node.nodeId]?.[String(node.value)] || "";
    }
  });

  let table = `
<table>
<tr>
<th>What Founder Said</th>
<th>What It Means</th>
</tr>
`;

  nodes.forEach((node) => {
    if (node.verbatim?.quote) {
      table += `
<tr>
<td>${node.verbatim.quote}</td>
<td>${node.verbatim.interpretation}</td>
</tr>
`;
    }
  });

  table += `</table>`;

  placeholders.verbatimTable = table;

  const charter = template.replace(
    /\{\{(\w+)\}\}/g,
    (_, key) => placeholders[key] || ""
  );

  return charter;
}

module.exports = renderCharter;