const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateAIContent = async (productDetails) => {
  try {
    const prompt = `Write a product description for the following product: ${productDetails.name}. Details: ${productDetails.description}`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });    

    // Accessing the content of the first choice
    return response.data.choices[0].message?.content?.trim() || "No response generated.";
  } catch (error) {
    console.error("OpenAI API request failed:", error.response?.data || error.message);
    throw new Error("OpenAI API request failed");
  }
};

module.exports = { generateAIContent };
