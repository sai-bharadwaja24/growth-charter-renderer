const axios = require("axios");

async function test() {
  const res = await axios.post(
    "http://localhost:5000/api/extract-transcript",
    {
      transcript:
        "We get about 12 qualified leads per month and want to reach 30. There is no structured lead generation process."
    }
  );

  console.log(res.data);
}

test();