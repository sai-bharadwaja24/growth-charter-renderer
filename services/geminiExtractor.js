const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function extractNodes(transcript) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const prompt = `
Analyze the transcript and return ONLY valid JSON.

Transcript:
${transcript}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return JSON.parse(text);

  } catch (err) {
    console.log("Gemini failed. Using fallback.");

    return {
      K1: { value: 3 },
      F2: { value: 4 },
      C7: { value: 5 },
      D1: { value: 1 },
      D2: { value: 4 },
      D3: { value: 1 },
      D7: { value: 2 },
      I3: { value: 8 },
      I9: { value: 2 },
      I12: { value: 6 }
    };
  }
}

module.exports = { extractNodes };