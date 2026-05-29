const mongoose = require("mongoose");
const Account = require("./models/Account");
const Node = require("./models/Node");

const seedData = require("./seed-data.json");

require("dotenv").config();

async function seed() {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    await Account.deleteMany({});
    await Node.deleteMany({});

    const account = await Account.create({
      companyName: seedData.account.companyName,
      businessDescription:
        seedData.account.businessDescription
    });

    const nodes = seedData.nodes.map(node => ({
      accountId: account._id,
      nodeId: node.nodeId,
      name: node.name,
      value: node.value,
      companion: node.companion || {},
      verbatim: node.verbatim || {},
      scoredBy: node.scoredBy || "system"
    }));

    await Node.insertMany(nodes);

    console.log(
      `Seeded ${nodes.length} nodes successfully`
    );

    process.exit();

  } catch (err) {

    console.error(err);
    process.exit(1);

  }
}

seed();